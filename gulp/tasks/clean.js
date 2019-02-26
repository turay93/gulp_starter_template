let del      = require('del'),
    taskName = 'clean';

module.exports = () => {
  $.gulp.task(taskName, () => {
    return del([$.path.dest, $.path.tmp]);
  });
};