let taskName = 'rootFolder';

let path = {
  src:  [`${$.path.src}/*.*`, `!${$.path.src}/*.pug`],
  dest: `${$.path.dest}/`
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