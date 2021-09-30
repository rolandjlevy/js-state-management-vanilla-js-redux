import store from '../store/index.js';
import { addTodo, deleteTodo, resetTodos, updateTodo } from '../store/actions.js';
import { element, create } from './utils.js';

export default class Todos {

  constructor() {
    this.id = 1;
    this.render();
    this.bindEvents();
  }
  
  todoList() {
    if (this.elems.list.firstChild) this.elems.list.firstChild.remove();
    const ul = create('ul');
    store.getState().todos.forEach(item => {
      const deleteBtn = create('button', { textContent: '×' });
      deleteBtn.addEventListener('click', (e) => {
        store.dispatch(deleteTodo(item.id));
        e.target.parentNode.remove();
        this.elems.resetBtn.disabled = !store.getState().todos.length;
      });
      const li = create('li', { textContent: `${item.id}: ${item.text}` });
      li.appendChild(deleteBtn);
      ul.appendChild(li);
    });
    this.elems.list.appendChild(ul);
  }

  render() {
    this.section = create('section', { id: 'todos-container'});
    this.elems = {
      header: create('h3', { textContent: 'Todos'}),
      input: create('input', { placeholder: 'Enter...', id: 'todo-input' }),
      addBtn: create('button', { textContent: 'Add todo',  disabled: true }),
      resetBtn: create('button', { textContent: 'Reset todos', disabled: true }),
      list: create('div')
    };
    Object.values(this.elems).forEach(elem => this.section.appendChild(elem));
  }

  bindEvents() {
    this.elems.addBtn.addEventListener('click', () => {
      const todo = {
        id: this.id++,
        text: store.getState().currentTodo
      }
      store.dispatch(addTodo(todo));
      this.todoList();
      this.elems.resetBtn.disabled = false;
    });
    this.elems.resetBtn.addEventListener('click', (e) => {
      store.dispatch(resetTodos());
      this.todoList();
      e.target.disabled = true;
    });
    this.elems.input.addEventListener('keyup', (e) => {
      this.elems.addBtn.disabled = !e.target.value.length;
      store.dispatch(updateTodo(e.target.value));
    });
  }

}