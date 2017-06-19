module.exports = function(config) {
    config.set({
	basePath: './',
	frameworks: ['jasmine'],
	files: [
	    {pattern: 'fonts/*', included: false},
	    {pattern: 'css/*.css', included: false},
	    {pattern: './node_modules/**/*.js', included: false},
	    {pattern: './node_modules/**/package.json', included: false},
	    {pattern: 'test/**/*.js', included: false},
	    {pattern: 'test/*.js', included: false},
	    {pattern: 'js/**/*.js', included: false},
	    {pattern: 'js/**/*.stache', included: false},
	    {pattern: 'index.html', included: false},
	    {pattern: 'index.js', included: false},
	    {pattern: 'package.json', included: false},
	    {pattern: './node_modules/steal/**/*.js', included: true},
	    "node_modules/steal/steal.js",
	    'karma.bootstrap.js',
	    {pattern: 'test/*.js', watched: false},
	]
	
    });
}
