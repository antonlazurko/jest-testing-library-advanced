/** @type {import('jest').Config} */
const config = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/coverage/**',
        '!src/**/*.mock.*'
    ],
    coverageDirectory: 'coverage',
    testMatch: ['**/src/**/*.spec.js']
};

module.exports = config;