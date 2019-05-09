let uglify   = require('gulp-uglify'),
    taskName = 'scripts';

let path = {
  src:  `${$.path.app.assets}/scripts/**/*.js`,
  dest: `${$.path.dest.assets}/scripts/`
};

$.watchs.push({
  src: path.src,
  task: taskName
});

module.exports = () => {
  $.gulp.task(taskName, () => {
    return $.gulp.src(path.src)
      .pipe($.gulp.dest(path.dest))
      .on('end', $.browserSync.reload);
  });

  $.gulp.task(`${taskName}:build`, () => {
    return $.gulp.src(path.src)
      .pipe(uglify())
      .pipe($.gulp.dest(path.dest));
  });
};