let taskName = 'dev';

module.exports = () => {
  $.gulp.task(taskName, $.gulp.series([
    'clean',
    'pug',
    'images',
    'styles',
    'fonts'
  ], $.gulp.parallel([
    'watch',
    'browserSync'
  ])));
};