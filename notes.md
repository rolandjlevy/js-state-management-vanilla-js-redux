### Attempted delete button

```js
elements('li > button').forEach(item => {
  item.addEventListener('click', (e) => {
    console.log(e.target.id)
    const id = Number(item.id.split('-')[1]);
    store.dispatch(deleteTodo(id));
    element('#todos-list').innerHTML = renderTodos();
  });
});

const renderTodos = () => {
  let html = '<ul>';
  store.getState().todos.forEach(item => {
    html += `<li>${item.text} <button id="delete-${item.id}">&times;</button></li>`;
  });
  html += '</ul>';
  return html;
}

```