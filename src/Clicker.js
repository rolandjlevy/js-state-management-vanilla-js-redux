import store from '../store/index.js';
import { incCounter, decCounter } from '../store/actions.js';
import { element } from './utils.js';

const updateCounter = () => {
  element('#counter').textContent = store.getState().counter;
}

const Clicker = () => {
  updateCounter();
  element('#btn-inc').addEventListener('click', (e) => {
    store.dispatch(incCounter());
    updateCounter();
  });
  element('#btn-dec').addEventListener('click', (e) => {
    store.dispatch(decCounter());
    updateCounter();
  });
}

export default Clicker;