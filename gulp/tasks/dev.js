let taskName = 'dev';

module.exports = () => {
  $.gulp.task(taskName, $.gulp.series([
    'clean',
    'pug',
    'styles'
  ], $.gulp.parallel([
    'watch',
    'browserSync'
  ])));
};