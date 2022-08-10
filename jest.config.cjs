module.exports = {
    moduleNameMapper: {"^.+\\.(css|less|scss|sass)$": "babel-jest"},
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.ts']
    /*
    preset: 'ts-jest/presets/js-with-ts',
    
    transform: {
        '\\.[jt]sx?$': 'esbuild-jest',
    },
    moduleNameMapper: {'^uuid$': require.resolve('uuid')},
    transformIgnorePatterns: ['/node_modules/(?!(uuid|xxx)/)'],
    */
    
    
}