let sass         = require('gulp-sass');
let csso         = require('gulp-csso');
let autoPrefixer = require('gulp-autoprefixer');
let sourceMaps   = require('gulp-sourcemaps');
let taskName     = 'styles';

let path = {
  src:  `${$.path.src}/styles/*.{scss,sass}`,
  dest: `${$.path.assets}/styles/`
};

$.watchs.push({
  src: [path.src, `${$.path.src}/styles/**/*.{scss,sass}`],
  task: taskName
});

module.exports = () => {
  $.gulp.task(taskName, () => {
    return $.gulp.src(path.src)
      .pipe(sourceMaps.init())
      .pipe(sass())
      .on('error', $.notify.onError({ title: taskName }))
      .pipe(autoPrefixer({ browsers: ['last 3 version'] }))
      .pipe(sourceMaps.write())
      .pipe($.gulp.dest(path.dest))
      .pipe($.browserSync.reload({ stream: true }));
  });

  $.gulp.task(`${taskName}:build`, () => {
    return $.gulp.src(path.src)
      .pipe(sass())
      .on('error', $.notify.onError({ title: taskName }))
      .pipe(autoPrefixer({ browsers: ['last 3 version'] }))
      .pipe(csso())
      .pipe($.gulp.dest(path.dest));
  });
};