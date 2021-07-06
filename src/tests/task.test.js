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

test('projId getter returns task projId', () => {
  expect(task.projId).toEqual(1);
});

test('id getter returns the task id', () => {
  expect(task.id).toEqual(1);
});

test('dueDate getter returns the task dueDate', () => {
  expect(task.dueDate).toBe('2021-1-19');
});
