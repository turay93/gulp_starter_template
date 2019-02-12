let pug           = require('gulp-pug');
let taskName      = 'pug';

let path = {
  src: `${$.path.src}/*.pug`,
  dest: {
    dev:   `${$.path.dev}/`,
    build: `${$.path.build}/`
  }
};

$.watchs.push({
  src: [path.src, `${$.path.src}/pug/**/*.pug`],
  task: taskName
});

module.exports = () => {
  $.gulp.task(taskName, () => {
    return $.gulp.src(path.src)
      .pipe(pug({ pretty: true }))
      .on('error', $.notify.onError({ title: taskName }))
      .pipe($.gulp.dest(path.dest.dev))
      .on('end', $.browserSync.reload);
  });

  $.gulp.task(`${taskName}:build`, () => {
    return $.gulp.src(path.src)
      .pipe(pug({ pretty: false }))
      .on('error', $.notify.onError({ title: taskName }))
      .pipe($.gulp.dest(path.dest.build));
  });
};