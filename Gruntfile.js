/*
 * dr-grunt-svg-sprites
 * 
 *
 * Copyright (c) 2013 rasmusfl0e
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		// Before generating any new files, remove any previously-created files.

		clean: {
			tests: ["tmp"],
			options: {
				deleteEmptyFolders: true
			}
		},

		// Configuration to be run (and then tested).
		"svg-composer": {
			options: {
				src: "test/shapes",
				dest: "tmp"
			},
			"shapes": {
				options: {
					elements: {
						"circles": ["circle", {name: "circle", x: -10, y: 5, fill: "#000"}],
						"squares": [{name: "square", y: 5, fill: "#F00"}, {name: "square", x: -10, fill: "#F00"}]
					}
				}
			}
		}
	});
	
	// Actually load this plugin's task(s).
	grunt.loadTasks("tasks");

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks("grunt-contrib-clean");
	
	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin"s task(s), then test the result.
	grunt.registerTask("test", ["clean", "svg-composer"]);
	
	// By default, lint and run all tests.
	grunt.registerTask("default", ["test"]);

};
