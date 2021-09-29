import { element } from './utils.js';
import Clicker from './Clicker.js';

export default class App {
  constructor() {
    this.render();
    Clicker();
  }
  template() {
    return `
      <h2>Redux with Vanilla JS</h2>
      <h3>Counter: <span id="counter"></span></h3>
      <button id="btn-dec">decrease -</button>
      <button id="btn-inc">increase +</button>
    `
  }
  render() {
    element('#app').innerHTML = this.template();
  }
}