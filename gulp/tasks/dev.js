let taskName = 'dev';

module.exports = () => {
  $.gulp.task(taskName, $.gulp.series([
    'clean',
    'pug',
  ], $.gulp.parallel([
    'watch',
    'browserSync'
  ])));
};