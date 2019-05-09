let taskName = 'rootFolder';

let path = {
  src:  [`${$.path.app.root}/*.*`, `!${$.path.app.root}/*.pug`],
  dest: `${$.path.dest.root}/`
};

$.watchs.push({
  src: path.src,
  task: taskName
});

module.exports = () => {
  $.gulp.task(taskName, () => {
    return $.gulp.src(path.src)
      .pipe($.gulp.dest(path.dest))
      .on('end', $.browserSync.reload);
  });
};