module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		jest: true,
		es6: true
	},
	parserOptions: {
		ecmaVersion: 2020,
		requireConfigFile: false
	},
	parser: '@babel/eslint-parser',
	extends: ['standard'],
	rules: {
		indent: [2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
		'no-tabs': 0
	}
}
