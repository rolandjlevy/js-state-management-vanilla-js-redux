import { element } from './utils.js';
import Clicker from './Clicker.js';
import Todos from './Todos.js';

export default class App {
  constructor() {
    this.render();
    Clicker();
    Todos();
  }
  template() {
    return `
      <h2>Redux with Vanilla JS</h2>
      <section>
        <h3>Counter: <span id="counter"></span></h3>
        <button id="btn-dec">decrease -</button>
        <button id="btn-inc">increase +</button>
      </section>
      <section>
        <input id="todo-input" placeholder="Enter..." />
        <button id="todo-add" disabled>Add todo</button>
        <div id="todos-list"></div>
      </section>
    `
  }
  render() {
    element('#app').innerHTML = this.template();
  }
}