module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.(js||jsx|ts|tsx)$': 'ts-jest',
	},
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/**/*.d.ts',
		'!src/index.tsx',
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	coverageReporters: ['json', 'lcov', 'text', 'clover'],
	setupFiles: ['react-app-polyfill/jsdom'],
	setupFilesAfterEnv: [
		'jest-styled-components',
		'<rootDir>/test-utils/setupTests.js',
	],
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
		'<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
	],
	watchPlugins: [
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname',
	],
	testPathIgnorePatterns: ['/node_modules/'],
	moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
	moduleNameMapper: {
		'^views(.*)$': '<rootDir>/src/views$1',
		'^components(.*)$': '<rootDir>/src/components$1',
		'^hooks(.*)$': '<rootDir>/src/hooks$1',
		'^assets(.*)$': '<rootDir>/src/assets$1',
		'^lib(.*)$': '<rootDir>/src/lib$1',
		'^app(.*)$': '<rootDir>/src/app$1',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
	},
};
