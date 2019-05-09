let cheerio  = require('gulp-cheerio'),
    svgMin   = require('gulp-svgmin'),
    taskName = 'svg';

let path = {
  src:  `${$.path.app.assets}/images/**/*.svg`,
  dest: `${$.path.dest.assets}/images/`
};

$.watchs.push({
  src: path.src,
  task: taskName
});

module.exports = () => {
  $.gulp.task(taskName, () => {
    return $.gulp.src(path.src)
      .pipe(svgMin())
      .on('error', $.notify.onError({ title: `${taskName} svg-min` }))
      .pipe(cheerio({
        run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
      }))
      .on('error', $.notify.onError({ title: `${taskName} cheerio` }))
      .pipe($.gulp.dest(path.dest))
      .pipe($.browserSync.reload({ stream: true }));
  });
};