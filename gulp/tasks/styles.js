let sass         = require('gulp-sass'),
    csso         = require('gulp-csso'),
    gcmq         = require('gulp-group-css-media-queries'),
    autoPrefixer = require('gulp-autoprefixer'),
    sourceMaps   = require('gulp-sourcemaps'),
    taskName     = 'styles';

let path = {
  src:  `${$.path.app.assets}/styles/*.{scss,sass}`,
  dest: `${$.path.dest.assets}/styles/`
};

$.watchs.push({
  src: [path.src, `${$.path.app.assets}/styles/**/*.{scss,sass}`],
  task: taskName
});

module.exports = () => {
  $.gulp.task(taskName, () => {
    return $.gulp.src(path.src)
      .pipe(sourceMaps.init())
      .pipe(sass())
      .on('error', $.notify.onError({ title: taskName }))
      .pipe(autoPrefixer({ browsers: ['last 3 version'] }))
      .pipe(gcmq())
      .pipe(sourceMaps.write())
      .pipe($.gulp.dest(path.dest))
      .pipe($.browserSync.reload({ stream: true }));
  });

  $.gulp.task(`${taskName}:build`, () => {
    return $.gulp.src(path.src)
      .pipe(sass())
      .on('error', $.notify.onError({ title: taskName }))
      .pipe(autoPrefixer({ browsers: ['last 3 version'] }))
      .pipe(gcmq())
      .pipe(csso())
      .pipe($.gulp.dest(path.dest));
  });
};