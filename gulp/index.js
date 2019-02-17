let taskPath = './gulp/tasks';

let tasks = [
  `${taskPath}/clean`,
  `${taskPath}/rootFolder`,
  `${taskPath}/browserSync`,
  `${taskPath}/pug`,
  `${taskPath}/images`,
  `${taskPath}/svg`,
  `${taskPath}/styles`,
  `${taskPath}/fonts`,
  `${taskPath}/watch`
];

tasks.push(`${taskPath}/dev`);
tasks.push(`${taskPath}/build`);

module.exports = tasks;