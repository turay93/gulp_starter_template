global.$ = {
  path: {
    app: {
      root: './app',
      assets: './app/assets'
    },
    dest: {
      root: './build',
      assets: './build/assets'
    },
    tmp: `./tmp`,
    gulp: {
      tasks: require('./gulp')
    }
  },
  watchs:      [],
  gulp:        require('gulp'),
  notify:      require('gulp-notify'),
  browserSync: require('browser-sync')
}

$.path.gulp.tasks.forEach(task => require(task)());
$.gulp.task('default', $.gulp.series('dev'));