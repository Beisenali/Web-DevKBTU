(function () {
  'use strict';

  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  function createTodoItem(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';
    checkbox.setAttribute('aria-label', 'Mark as done');

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('aria-label', 'Delete item');

    checkbox.addEventListener('change', function handleCheckboxChange() {
      li.classList.toggle('done', checkbox.checked);
    });

    deleteBtn.addEventListener('click', function handleDeleteClick() {
      todoList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const text = todoInput.value.trim();
    if (!text) return;

    const todoItem = createTodoItem(text);
    todoList.appendChild(todoItem);

    todoInput.value = '';
    todoInput.focus();
  }

  todoForm.addEventListener('submit', handleFormSubmit);
}());
