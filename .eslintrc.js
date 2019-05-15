module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'import', 'react', 'jsx-a11y'
    ],
    extends: [
        'eslint:recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
    ],
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'max-len': [0],
        'default-case': [0],
        'indent': [1, 4, {
            SwitchCase: 1,
        }],

        'import/prefer-default-export': [0],
        'import/no-extraneous-dependencies': [0],
        'import/extensions': [2, 'ignorePackages', {
            ts: 'never',
            tsx: 'never',
        }],

        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [0],
        'react/jsx-one-expression-per-line': [0],

        '@typescript-eslint/interface-name-prefix': [0],
        '@typescript-eslint/no-explicit-any': [0]
    },
}
