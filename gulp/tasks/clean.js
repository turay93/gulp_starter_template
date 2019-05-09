let del      = require('del'),
    taskName = 'clean';

module.exports = () => {
  $.gulp.task(taskName, () => {
    return del([$.path.dest.root, $.path.tmp]);
  });
};