module.exports = {
    env: {
        node: true,
        es6: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'import',
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
        'no-console': [0],

        'import/prefer-default-export': [0],
        'import/no-extraneous-dependencies': [0],
        'import/extensions': [2, 'ignorePackages', {
            ts: 'never',
            tsx: 'never',
        }],

        '@typescript-eslint/interface-name-prefix': [0],
        '@typescript-eslint/no-explicit-any': [0],
        '@typescript-eslint/no-non-null-assertion': [0]
    },
    overrides: [
        {
            files: "**/*.js",
            rules: {
                "@typescript-eslint/no-var-requires": [0]
            }
        }
    ]
}
