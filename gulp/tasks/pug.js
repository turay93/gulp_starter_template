let pug      = require('gulp-pug'),
    data     = require('gulp-data'),
    fs       = require('fs'),
    taskName = 'pug';

let path = {
  src:  `${$.path.src}/*.pug`,
  dest: `${$.path.dest}/`,
  data: `${$.path.tmp}/data.json`
};

$.watchs.push({
  src: [path.src, `${$.path.src}/pug/**/*.pug`],
  task: taskName
});

function dataFunction () {
  if (fs.existsSync(path.data)) {
    return JSON.parse(fs.readFileSync(path.data));
  }
}

module.exports = () => {
  $.gulp.task(taskName, () => {
    return $.gulp.src(path.src)
      .pipe(data(dataFunction))
      .pipe(pug({ pretty: true, basedir: './' }))
      .on('error', $.notify.onError({ title: taskName }))
      .pipe($.gulp.dest(path.dest))
      .on('end', $.browserSync.reload);
  });

  $.gulp.task(`${taskName}:build`, () => {
    return $.gulp.src(path.src)
      .pipe(data(dataFunction))
      .pipe(pug({ pretty: false, basedir: './' }))
      .on('error', $.notify.onError({ title: taskName }))
      .pipe($.gulp.dest(path.dest));
  });
};