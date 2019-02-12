global.$ = {
  path: {
    src:   './app',
    dev:   './dev',
    build: './build',
    tasks: require('./gulp')
  },
  watchs:      [],
  gulp:        require('gulp'),
  notify:      require('gulp-notify'),
  browserSync: require('browser-sync')
}

$.path.tasks.forEach(task => require(task)());
$.gulp.task('default', $.gulp.series('dev'));