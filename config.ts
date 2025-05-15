export const config = {
  baseUrl: process.env.TEST_BASE_URL || 'https://www.saucedemo.com/',
  username: process.env.TEST_USERNAME || 'standard_user',
  lockedOutUsername: process.env.TEST_LOCKED_OUT_USERNAME || 'locked_out_user',
  password: process.env.TEST_PASSWORD || 'secret_sauce',
};
