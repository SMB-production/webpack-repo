import type {Config} from 'jest'

const config: Config = {
   clearMocks: true,
   coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
   moduleDirectories: ['node_modules'],
   moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
   rootDir: '../../',
   testEnvironment: 'jsdom',
   testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
}

export default config
