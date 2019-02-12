let taskName = 'watch';

module.exports = () => {
  $.gulp.task(taskName, () => {
    $.watchs.forEach(watch => {
      $.gulp.watch(watch.src, $.gulp.series(watch.task));
    });
  });
};