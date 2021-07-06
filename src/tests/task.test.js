const Task = require('../task').default;

const task = new Task('task test', 'task description', '2021-1-19', 'low', 1, 1);

test('Create new task', () => {
  expect(task instanceof Task).toBeTruthy();
});

test('Title getter returns task title', () => {
  expect(task.title).toBe('task test');
});

test('description getter returns task description', () => {
  expect(task.description).toBe('task description');
});
