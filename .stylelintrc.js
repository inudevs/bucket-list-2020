module.exports = {
  processors: [
    'stylelint-processor-styled-components'
  ],
  extends: [
    'stylelint-config-airbnb',
    'stylelint-config-styled-components',
  ],
  syntax: 'scss',
  rules: {
    'number-leading-zero': null,
  },
};
