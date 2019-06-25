'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		browserify: {
			ads: {
				src: "src/main.js",
				dest: "dist/channeldir-ads.js"
			}
		}
		
	});

	grunt.loadNpmTasks('grunt-browserify');
};