let taskName = 'build';

module.exports = () => {
  $.gulp.task(taskName, $.gulp.series([
    'clean',
    'pug:build',
    'styles:build',
    'fonts'
  ]));
};