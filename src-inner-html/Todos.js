import store from '../store/index.js';
import { addTodo, deleteTodo, resetTodos, updateTodo } from '../store/actions.js';
import { element, elements, create } from './utils.js';

export default class Todos {

  constructor() {
    this.id = 1
  }
deleteTodo
  bindEvents() {
    element('#todo-add').addEventListener('click', () => {
      const todo = {
        id: this.id++,
        text: store.getState().currentTodo
      }
      store.dispatch(addTodo(todo));
      this.renderTodosList();
      element('#todos-reset').disabled = false;
    });
    
    element('#todos-reset').addEventListener('click', (e) => {
      store.dispatch(resetTodos());
      this.renderTodosList();
      e.target.disabled = true;
    });

    element('#todo-input').addEventListener('keyup', (e) => {
      element('#todo-add').disabled = !e.target.value.length;
      store.dispatch(updateTodo(e.target.value));
    });
  }

  renderTodosList() {
    let html = '\n<ul>';
    store.getState().todos.forEach(item => {
      // const deleteBtn = `<button id="delete-${item.id}">&times;</button>`;
      html += `\n<li><span>${item.id}: ${item.text}</span></li>`; 
    });
    html += '\n</ul>';
    element('#todos-list').innerHTML = html;
  }

  template() {
    return `
      <h3>Todos</h3>
      <input id="todo-input" placeholder="Enter..." />
      <button id="todo-add" disabled>Add todo</button>
      <button id="todos-reset" disabled>Reset todos</button>
      <div id="todos-list"></div>
    `;
  }
  
}