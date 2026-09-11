import test from 'node:test';
import assert from 'node:assert/strict';
import { validatePublicSignupRequest } from '../services/adminSecurity.js';

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
