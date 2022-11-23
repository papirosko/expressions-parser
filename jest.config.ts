import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: '.',
    roots: ['test'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts'],
    coveragePathIgnorePatterns: ["/node_modules/", '/src/generated/'],
    reporters: ['default', 'jest-junit'],
    'coverageThreshold': {
        'global': {
            'branches': 30,
            'functions': 30,
            'lines': 30,
            'statements': 30
        }
    },
};
export default config;
