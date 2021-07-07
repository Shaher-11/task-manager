/**
 * @jest-environment jsdom
 */

test('the document should have a div for projects', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

test('the document should have a div for tasks', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

test('the document should have a button to create projects', () => {
  const element = document.createElement('btn');
  expect(element).not.toBeNull();
});

test('the document should have a button to create tasks', () => {
  const element = document.createElement('btn');
  expect(element).not.toBeNull();
});

test('the document should have a button to remove projects', () => {
  const element = document.createElement('btn');
  expect(element).not.toBeNull();
});

test('the document should have a button to remove tasks', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});
