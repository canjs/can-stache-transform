module.exports = {
	transformIgnorePatterns: [
		'/node_modules/(?!can)'
	],
	testEnvironment: 'jest-environment-jsdom',
	moduleFileExtensions: ['js', 'stache'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.mjs$': 'babel-jest',
		'^.+\\.stache$': './index.js'
	}
}
