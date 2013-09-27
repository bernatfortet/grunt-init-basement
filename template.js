'use strict';


/*

var http = require('http');
var fs = require('fs');

var file = fs.createWriteStream("test.txt");
var request = http.get("https://raw.github.com/bernatfortet/grunt-init-basement/master/root/app/styles/style-global.less", function(response) {
  response.pipe(file);
});
*/



// Basic template description.
exports.description = 'Create a website basement structure.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'This template creates a website basement structure';

// Template-specific notes to be displayed after question prompts.
exports.after = 'God bless you son, you are now ready!';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';



// The actual init template.
exports.template = function(grunt, init, done) {

	init.process({},[

		// Prompt for these values.
		init.prompt('name'),
		init.prompt('title'),

	], function(err, props) {

		// Files to copy (and process).
		var files = init.filesToCopy(props);

		// Actually copy (and process) files.
		init.copyAndProcess(files, props);

		// All done!
		done();
	});

};