module.exports = {
	globDirectory: './',
	globPatterns: [
	  '**/*.{css,png,ico,html,js,json,svg}'
	],
	swDest: './sw.js',
	ignoreURLParametersMatching: [
	  /^utm_/,
	  /^fbclid$/
	],
  };
  