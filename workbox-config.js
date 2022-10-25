module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,jpg,webp,html,json,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};