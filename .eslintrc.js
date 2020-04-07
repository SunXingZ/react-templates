module.exports = {
	root: true,
	parser: 'babel-eslint',
	env: {
		es6: true,
		'react-native/react-native': true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:flowtype/recommended',
		'plugin:prettier/recommended',
		'prettier'
	],
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: ['react', 'react-native', 'flowtype', 'prettier'],
	rules: {
		'prettier/prettier': 'error'
	}
};
