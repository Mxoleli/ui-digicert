import dotenv from 'dotenv';

// Load .env file locally only if not in CI
if (!process.env.CI) {
  dotenv.config();
}

function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} environment variable is not set`);
  }
  return value;
}

export const config = {
  baseUrl: getEnvVar('TEST_BASE_URL'),
  username: getEnvVar('TEST_USERNAME'),
  lockedOutUsername: getEnvVar('TEST_LOCKED_OUT_USERNAME'),
  password: getEnvVar('TEST_PASSWORD'),
};
