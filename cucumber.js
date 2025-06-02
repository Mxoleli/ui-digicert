module.exports = {
  default: {
    require: [
      'features/step-definitions/**/*.ts',
      'support/hooks.ts',
    ],
    default: `--require-module ts-node/register --timeout 10000`,
    // requireModule: ['ts-node/register'],
    format: ['progress'],
    paths: ['features/**/*.feature'],
  },
};
