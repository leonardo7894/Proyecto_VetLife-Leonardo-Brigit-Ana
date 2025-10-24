export default {
    testEnvironment: 'jsdom',
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
      //'^.+\\.[tj]sx?$': 'babel-jest'
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      //'^@/(.*)$': '<rootDir>/src/$1'  // Para usar alias como en Vite
    },
    extensionsToTreatAsEsm: [".jsx"],
    setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!src/main.jsx' // excluye el entrypoint
    ]
    
  };


  