const Project = require('../project').default;
const Task = require('../task').default;

const project = new Project('project test', 1);
const task = new Task('task test', 'task description', '2021-1-19', 'low', 1, 1);
