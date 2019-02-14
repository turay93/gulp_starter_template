let taskName = 'dev';

module.exports = () => {
  $.gulp.task(taskName, $.gulp.series([
    'clean',
    'pug',
    'styles',
    'fonts'
  ], $.gulp.parallel([
    'watch',
    'browserSync'
  ])));
};