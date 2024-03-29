/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
