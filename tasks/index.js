/*
 * dr-grunt-svg-composer
 * 
 *
 * Copyright (c) 2013 drdk
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

	var composer = require("dr-svg-composer");

	grunt.registerMultiTask("svg-composer", "Composite and transform SVG elements", function() {

		var done = this.async();

		console.log("Composing SVG elements for: " + this.target);

		var options = this.options();

		if ("dest" in  this.data) {

		}
		else {
			options.dest += "/" + this.target;
		}

		composer(options.src, options.dest, options.elements, function () {
			console.log("Done.");
			done();
		});

	});

};
