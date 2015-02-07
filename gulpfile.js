/*
** See https://github.com/sindresorhus/pageres#usage-1 for more
** To run this file simply open command prompt and type 'gulp'
** For acceptable viewport sizes see here - http://viewportsizes.com/
*/


/* CHANGE THIS as appropriate */
var council_name = 'abc';
/* CHANGE THIS as appropriate */



var site_name = 'fdiapp.com/council_apps/' + council_name;
//Apple screenshot viewport sizes = '640x920','640x1096','750x1334','1242x2208', '1024x768'
//Windows screenshot viewport size = '768x1280'
var viewport_sizes = ['640x920','640x1096','750x1334','1242x2208', '768x1280', '768x1024'];


var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
	var Pageres = require('pageres');

	var pageres = new Pageres({delay: 15})
	    .src(site_name, viewport_sizes)
	    .dest(__dirname);

	pageres.run(function (err) {
	    if (err) {
	        throw err;
	    }

	    console.log('All done. Screenshots taken!');
	});
});


