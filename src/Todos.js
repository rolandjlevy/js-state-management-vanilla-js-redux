import store from '../store/index.js';
import { addTodo, deleteTodo, updateTodo } from '../store/actions.js';
import { element, elements } from './utils.js';

let id = 1;

const renderTodos = () => {
  let html = '<ul>';
  store.getState().todos.forEach(item => {
    html += `<li>${item.text} <button id="delete-${item.id}">&times;</li>`;
  });
  html += '</ul>';
  return html;
}
const Todos = () => {
  element('#todo-add').addEventListener('click', () => {
    const todo = {
      id: id++,
      text: store.getState().currentTodo
    }
    store.dispatch(addTodo(todo));
    element('#todos-list').innerHTML = renderTodos();
  });

  // elements('li > button').forEach(item => {
  //   item.addEventListener('click', (e) => {
  //     console.log(e.target.id)
  //     const id = Number(item.id.split('-')[1]);
  //     store.dispatch(deleteTodo(id));
  //     element('#todos-list').innerHTML = renderTodos();
  //   });
  // });

  element('#todo-input').addEventListener('keyup', (e) => {
    element('#todo-add').disabled = !e.target.value.length;
    store.dispatch(updateTodo(e.target.value));
  });
}

export default Todos;