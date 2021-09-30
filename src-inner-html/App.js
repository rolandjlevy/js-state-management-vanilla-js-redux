import { element } from './utils.js';
import Clicker from './Clicker.js';
import Todos from './Todos.js';

export default class App {

  constructor() {
    this.clicker = new Clicker();
    this.todos = new Todos();
    this.render();
    this.clicker.bindEvents();
    this.clicker.updateCounter();
    this.todos.bindEvents();
  }

  template() {
    return `
      <header>
        <h2>Redux with Vanilla JS (innerHTML)</h2>
      </header>
      <section>
        ${this.clicker.template()}
      </section>
      <section>
        ${this.todos.template()}
      </section>
    `
  }

  render() {
    element('#app').innerHTML = this.template();
  }
  
}