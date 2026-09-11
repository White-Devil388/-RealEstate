export const validatePublicSignupRequest = (body = {}) => {
  const payload = body || {};
  const roleValue = typeof payload.role === 'string' ? payload.role.trim().toLowerCase() : '';
  const adminSecretProvided = Boolean(
    payload.adminSecret ||
    payload.adminSecretKey ||
    payload.adminSeedPassword ||
    payload.seedAdminPassword ||
    payload.isAdmin ||
    payload.is_admin ||
    payload.adminAccessCode
  );

  if (roleValue === 'admin' || roleValue === 'administrator' || roleValue === 'superadmin' || adminSecretProvided) {
    return {
      allowed: false,
      message: 'Admin access is restricted. Public signup can only create a regular user account.'
    };
  }

  return { allowed: true };
};

export const validateSeedAdminRequest = (body = {}, expectedSecret = '') => {
  const payload = body || {};
  const providedSecret = [
    payload.adminSeedPassword,
    payload.seedAdminPassword,
    payload.seedPassword,
    payload.secret,
    payload.adminPassword
  ].find((value) => typeof value === 'string' && value.trim().length > 0);

  const expected = (expectedSecret || '').trim();
  if (!providedSecret) {
    return {
      allowed: false,
      message: 'Admin seed password is required to create or update an admin account.'
    };
  }

  if (expected && providedSecret !== expected) {
    return {
      allowed: false,
      message: 'Invalid admin seed password.'
    };
  }

  return { allowed: true };
};
