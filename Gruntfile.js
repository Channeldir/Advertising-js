'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		browserify: {
			ads: {
				src: "src/main.js",
				dest: "build/build.js"
			}
		},
		
		uglify: {
			ads: {
				src:'build/build.js',
				dest: 'dist/channeldir-ads.min.js'
			}
		}
		
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('build', ['browserify:ads', 'uglify:ads']);
};