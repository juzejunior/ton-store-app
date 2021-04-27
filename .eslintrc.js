module.exports = {
	root: true,
	extends: "airbnb",
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	rules: {
		"@typescript-eslint/no-unused-vars": ["error"],
		"comma-dangle": ["error", "always-multiline"],
		"import/extensions": "off",
		"import/no-unresolved": "off",
		"indent": ["error", "tab"],
		"no-tabs": "off",
		"no-undef": "off",
		"no-unused-vars": "off",
		"quotes": ["error", "double"],
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/jsx-filename-extension": "off",
		"react/prop-types": "off",
		"eslint.enable": false
	}
};
