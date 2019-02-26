let pth      = require('path'),
    merge    = require('gulp-merge-json'),
    taskName = 'data';

let path = {
  src:  `./data/**/*.json`,
  dest: $.path.tmp
};

$.watchs.push({
  src: path.src,
  task: [taskName, 'pug']
});

function editFunction (json, file) {
  let filename = pth.basename(file.path),
      primaryKey = filename.replace(pth.extname(filename), ''),
      data = {};

  data[primaryKey.toUpperCase()] = json;
  return data;
}

module.exports = () => {
  $.gulp.task(taskName, () => {
    return $.gulp.src(path.src)
      .pipe(merge({
        fileName: 'data.json',
        edit: editFunction
      }))
      .pipe($.gulp.dest(path.dest));
  });
};
