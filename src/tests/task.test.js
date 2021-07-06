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
test('priority getter returns the task priority', () => {
  expect(task.priority).toBe('low');
});

test('status getter returns the task status', () => {
  expect(task.status).toBe('To-do');
});

test('formatedDueDate returns a formated the task dueDate', () => {
  expect(task.formatedDueDate() instanceof Date).toBeTruthy();
});

test('Title setter modifies task title', () => {
  task.title = 'modified title';
  expect(task.title).toBe('modified title');
});

test('description setter modifies the task description', () => {
  task.description = 'modified description';
  expect(task.description).toBe('modified description');
});
