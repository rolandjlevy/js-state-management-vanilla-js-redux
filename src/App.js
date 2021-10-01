import { element, create } from './utils.js';
import Clicker from './Clicker.js';
import Todos from './Todos.js';

export default class App {

  constructor() {
    this.clicker = new Clicker();
    this.todos = new Todos();
    const header = create('h2', { textContent: 'Redux with Vanilla JS' });
    element('#app').appendChild(header);
    element('#app').appendChild(this.clicker.section);
    element('#app').appendChild(this.todos.section);
  }

}