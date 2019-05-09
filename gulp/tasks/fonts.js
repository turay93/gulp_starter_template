let taskName = 'fonts';

let path = {
  src:  `${$.path.app.assets}/fonts/**/*.{eot,otf,ttf,woff,woff2,svg}`,
  dest: `${$.path.dest.assets}/fonts/`
};

$.watchs.push({
  src: path.src,
  task: taskName
});

module.exports = () => {
	$.gulp.task(taskName, () => {
		return $.gulp.src(path.src)
			.pipe($.gulp.dest(path.dest));
	});
};