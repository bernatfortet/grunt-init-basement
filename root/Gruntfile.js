'use strict';
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
	return connect.static(path.resolve(point));
};
module.exports = function(grunt) {

	grunt.initConfig({

		// LiveRelaod configuration
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

		// File Watching
		regarde: {
			jade: {
				files: ['*.jade'],
				tasks: ['jade','livereload']
			},
			less: {
				files: ['*/**/*.less'],
				tasks: ['less','livereload']
			},
			coffee: {
				files: ['*/**/*.coffee'],
				tasks: ['coffee','livereload']
			}
		},

		// Jade Configuration
		jade: {
			compile: {
				files: {
					'index.html': ['index.jade'],
				}
			}
		},

		// Less Configuration
		less: {
			development: {
				options: {
					paths: ["assets/less"],
					yuicompress: true
				},
				files: {
					"assets/css/style.css": "assets/less/style.less"
				}
			}
		},

		//Coffee Script Configuration
		coffee: {
			development:{
				glob_to_multiple: {
					expand: true,
					cwd: 'assets/coffee',
					src: ['**/*.coffee'],
					dest: 'assets/scripts',
					ext: '.js'
				}
			}
		}
	});




	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-livereload');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task.
	grunt.registerTask('default', ['livereload-start', 'connect', 'regarde']);
	
	//grunt.registerTask('default', ['jshint', 'qunit', 'clean', 'concat', 'uglify']);

};