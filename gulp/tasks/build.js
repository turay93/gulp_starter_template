let taskName = 'build';

module.exports = () => {
  $.gulp.task(taskName, $.gulp.series([
    'clean',
    'pug:build',
    'images:build',
    'svg',
    'styles:build',
    'fonts'
  ]));
};