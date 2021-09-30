import store from '../store/index.js';
import { incCounter, decCounter } from '../store/actions.js';
import { element } from './utils.js';

export default class Clicker {

  constructor() {
  }

  bindEvents() {
    element('#btn-inc').addEventListener('click', (e) => {
      store.dispatch(incCounter());
      this.updateCounter();
    });
    element('#btn-dec').addEventListener('click', (e) => {
      store.dispatch(decCounter());
      this.updateCounter();
    });
  }
  updateCounter() {
    element('#counter').textContent = store.getState().counter;
  }

  template() {
    return `
      <h3>Counter: <span id="counter"></span></h3>
      <button id="btn-dec">decrease -</button>
      <button id="btn-inc">increase +</button>
    `;
  }
  
}