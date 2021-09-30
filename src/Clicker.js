import store from '../store/index.js';
import { incCounter, decCounter } from '../store/actions.js';
import { element, create } from './utils.js';

export default class Clicker {

  constructor() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.section = create('section');
    this.elems = {
      heading: create('h3', { textContent: 'Counter: 0'}),
      decBtn: create('button', { textContent: 'decrease -' }),
      incBtn: create('button', { textContent: 'increase +' }),
    };
    Object.entries(this.elems).forEach(([key, value]) => this.section.appendChild(value));
  }

  bindEvents() {
    this.elems.decBtn.addEventListener('click', (e) => {
      store.dispatch(decCounter());
      this.updateCounter();
    });
    this.elems.incBtn.addEventListener('click', (e) => {
      store.dispatch(incCounter());
      this.updateCounter();
    });
  }

  updateCounter() {
    this.elems.heading.textContent = 'Counter: ' + store.getState().counter;
  }
  
}