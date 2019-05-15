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
        'shared/(.*)': '<rootDir>/src/shared/$1',
    },
    snapshotResolver: './jest.snapshot',
};
