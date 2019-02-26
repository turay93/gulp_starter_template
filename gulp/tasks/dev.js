let taskName = 'dev';

module.exports = () => {
  $.gulp.task(taskName, $.gulp.series([
    'clean',
    'rootFolder',
    'data',
    'pug',
    'scripts',
    'images',
    'svg',
    'styles',
    'fonts'
  ], $.gulp.parallel([
    'watch',
    'browserSync'
  ])));
};