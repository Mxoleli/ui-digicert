module.exports = {
  default: {
    require: [
      'features/step-definitions/**/*.ts',
      'support/hooks.ts',
    ],
    requireModule: ['ts-node/register'],
    format: ['progress'],
    paths: ['features/**/*.feature'],
  },
};
