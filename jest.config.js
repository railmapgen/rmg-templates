module.exports = {
    roots: ['<rootDir>/src'],
    setupFiles: ['<rootDir>/src/setupTests.ts'],
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['/node_modules/(?!(@railmapgen/.*))'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
};
