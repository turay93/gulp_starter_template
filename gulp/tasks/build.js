let taskName = 'build';

module.exports = () => {
  $.gulp.task(taskName, $.gulp.series([
    'clean:build',
    'pug:build',
    'styles:build'
  ]));
};