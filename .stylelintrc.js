module.exports = {
  processors: [
    'stylelint-processor-styled-components'
  ],
  plugins: [
    'stylelint-order'
  ],
  extends: [
    'stylelint-config-airbnb',
    'stylelint-config-styled-components',
  ],
  syntax: 'scss',
  rules: {
    'number-leading-zero': null,
    'order/order': [
      'custom-properties',
      'declarations'
    ],
    'order/properties-alphabetical-order': true,
  },
};
