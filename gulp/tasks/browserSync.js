let taskName = 'browserSync';

module.exports = () => {
  $.gulp.task(taskName, () => {
    $.browserSync.init({
        server: {
          baseDir: $.path.dev,
        },
        notify: false
    });
  });
};