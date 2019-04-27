let fs = require('fs'),
    taskPath = './gulp/tasks',
    tasks = [];

fs.readdirSync(taskPath).forEach(fileName => {
  if (fileName !== 'dev.js' && fileName !== 'build.js') {
    tasks.push(`${taskPath}/${fileName}`);
  }
});

tasks.push(`${taskPath}/dev.js`);
tasks.push(`${taskPath}/build.js`);

module.exports = tasks;