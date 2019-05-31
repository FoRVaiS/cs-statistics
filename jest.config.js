module.exports = {
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            tsConfig: 'src/client/tsconfig.json',
        },
    },
    setupFilesAfterEnv: [
        'jest-extended',
    ],
    roots: ['./src'],
    verbose: true,
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '^generated/(.*)': '<rootDir>/src/__generated__/$1',
        '^utilities/(.*)': '<rootDir>/src/utilities/$1',
    },
    snapshotResolver: './jest.snapshot',
};
