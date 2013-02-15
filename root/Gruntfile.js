'use strict';
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
	return connect.static(path.resolve(point));
};
module.exports = function(grunt) {

	grunt.initConfig({
		connect: {
			livereload: {
				options: {
					port: 9001,
					middleware: function(connect, options) {
						return [lrSnippet, folderMount(connect, '.')]
					}
				}
			}
		},
		regarde: {
			jade: {
				files: ['jade.jade'],
				tasks: ['jade','livereload']
			}
		},
		jade: {
			compile: {
				files: {
					'jade.html': ['jade.jade'],
				}
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-livereload');

	// Default task.
	grunt.registerTask('default', ['livereload-start', 'connect', 'regarde']);
	
	//grunt.registerTask('default', ['jshint', 'qunit', 'clean', 'concat', 'uglify']);

};