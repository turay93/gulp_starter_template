let imagemin = require('gulp-imagemin');
let taskName = 'images';

let path = {
  src:  `${$.path.src}/images/**/*.{png,jpg,jpeg,gif}`,
  dest: `${$.path.assets}/images/`
};

$.watchs.push({
  src: path.src,
  task: taskName
});

module.exports = function() {
  $.gulp.task(taskName, () => {
    return $.gulp.src(path.src)
      .pipe($.gulp.dest(path.dest))
      .pipe($.browserSync.reload({ stream: true }));
  });

  $.gulp.task(`${taskName}:build`, () => {
    return $.gulp.src(path.src)
      .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 3})
      ], { verbose: true }))
      .on('error', $.notify.onError({ title: taskName }))
      .pipe($.gulp.dest(path.dest));
  });
};