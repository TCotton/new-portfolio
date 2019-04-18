module.exports = {
	coverageThreshold: {
		'global': {
			'branches': 40,
			'functions': 40,
			'lines': 40,
			'statements': 40
		}
	},
	collectCoverageFrom: [
		'**/*.{js,jsx}'
	],
	coveragePathIgnorePatterns: [
		'gatsby-browser.js',
		'gatsby-config.js',
		'gatsby-node.js',
		'gatsby-ssr.js',
		'jest.config.js',
		'coverage/*',
		'public/*',
		'jest-preprocess.js',
		'examples/*',
		'server/*'
	],
	transform: {
		"^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
	},
	testMatch: [ '**/?(*.)+(spec).js?(x)' ],
	moduleNameMapper: {
		".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
		".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$": `<rootDir>/__mocks__/file-mock.js`,
	},
	testPathIgnorePatterns: [`node_modules`, `.cache`],
	transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
	globals: {
		__PATH_PREFIX__: ``,
	},
	testURL: `http://localhost`,
	setupFiles: [`<rootDir>/loadershim.js`],
}
