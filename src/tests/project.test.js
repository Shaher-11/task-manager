const Project = require('../project').default;
const Task = require('../task').default;

const project = new Project('project test', 1);
const task = new Task('task test', 'task description', '2021-1-19', 'low', 1, 1);
test('Create new project', () => {
  expect(project instanceof Project).toBeTruthy();
});

test('Title getter returns the project title', () => {
  expect(project.title).toBe('project test');
});

test('Id getter returns the project id', () => {
  expect(project.id).toBe(1);
});
