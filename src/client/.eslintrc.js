module.exports = {
    env: {
        browser: true,
    },
    extends: [
        '../../.eslintrc.js',
    ],
    plugins: [
        'react',
        'jsx-a11y',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/prop-types': [0],
        'react/jsx-filename-extension': [0],
        'react/jsx-one-expression-per-line': [0],
    }
}
