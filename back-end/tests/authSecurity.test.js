import test from 'node:test';
import assert from 'node:assert/strict';
import { buildPublicUsersFilter, validatePublicSignupRequest, validateUserDeleteRequest } from '../services/adminSecurity.js';
import { resolveAdminConfig } from '../services/seedAdmin.js';

test('public signup rejects admin role override', () => {
  const result = validatePublicSignupRequest({ role: 'admin' });
  assert.equal(result.allowed, false);
  assert.match(result.message, /admin/i);
});

test('public signup rejects admin secret attempts', () => {
  const result = validatePublicSignupRequest({ adminSecret: 'top-secret' });
  assert.equal(result.allowed, false);
  assert.match(result.message, /admin/i);
});

test('public user listing includes all non-admin records', () => {
  assert.deepEqual(buildPublicUsersFilter(), { role: { $ne: 'admin' } });
});

test('public signup requires KYC details', () => {
  const missingKyc = validatePublicSignupRequest({ name: 'Test User', email: 'test@example.com', password: 'secret123' });
  assert.equal(missingKyc.allowed, false);
  assert.match(missingKyc.message, /kyc/i);

  const validKyc = validatePublicSignupRequest({
    name: 'Test User',
    email: 'test@example.com',
    password: 'secret123',
    kycType: 'PAN',
    kycNumber: 'ABCDE1234F'
  });
  assert.equal(validKyc.allowed, true);
});

test('public-user deletion is allowed only for non-admin accounts', () => {
  const publicUser = validateUserDeleteRequest({ role: 'user' });
  assert.equal(publicUser.allowed, true);

  const adminUser = validateUserDeleteRequest({ role: 'admin' });
  assert.equal(adminUser.allowed, false);
  assert.match(adminUser.message, /admin/i);
});

test('default admin config is used when env vars are not set', () => {
  const config = resolveAdminConfig({
    env: {
      ADMIN_EMAIL: '',
      ADMIN_PASSWORD: '',
      ADMIN_NAME: '',
      ADMIN_KYC_TYPE: '',
      ADMIN_KYC_NUMBER: ''
    }
  });

  assert.equal(config.email, 'admin@gurukripaarcon.com');
  assert.equal(config.password, 'GurukripaAdmin@2026');
  assert.equal(config.name, 'Gurukripa Admin');
  assert.equal(config.kycType, 'ADMIN');
  assert.equal(config.kycNumber, 'ADMIN-SEED-01');
});
