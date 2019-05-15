module.exports = {
    extends: 'stylelint-config-recommended',
    plugins: ['stylelint-scss'],
    rules: {
        'no-empty-source': null,
        'at-rule-no-unknown': null,
        'color-hex-case': 'upper',
        'color-hex-length': 'long',
        'selector-class-pattern': '^[a-z-0-9_]+$',
        'selector-id-pattern': '^[a-z-0-9_]+$',
        'scss/at-rule-no-unknown': true,
    },
};
