let del      = require('del');
let taskName = 'clean';

module.exports = () => {
  $.gulp.task(taskName, () => {
    return del($.path.dev);
  });

  $.gulp.task(`${taskName}:build`, () => {
    return del($.path.build);
  });
};