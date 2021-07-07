/**
 * @jest-environment jsdom
 */

test('the project navbar should have the logo-project', () => {
  const element = document.createElement('logo-project');
  expect(element).not.toBeNull();
});

test('the project navbar should have the add-project', () => {
  const element = document.createElement('add-project');
  expect(element).not.toBeNull();
});

test('the project navbar should have the add_proj_icon', () => {
  const element = document.createElement('add_proj_icon');
  expect(element).not.toBeNull();
});

test('the project navbar should have the add_project_form', () => {
  const element = document.createElement('add_project_form');
  expect(element).not.toBeNull();
});

test('the project navbar should have the cancel_btn', () => {
  const element = document.createElement('cancel_btn');
  expect(element).not.toBeNull();
});
