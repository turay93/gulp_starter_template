let taskPath = './gulp/tasks';

let tasks = [
  `${taskPath}/clean`,
  `${taskPath}/browserSync`,
  `${taskPath}/pug`,
  `${taskPath}/watch`
];

tasks.push(`${taskPath}/dev`);
tasks.push(`${taskPath}/build`);

module.exports = tasks;