import { INC_COUNTER, DEC_COUNTER } from './actionTypes.js';
import reducer from './reducer.js';

export default Redux.createStore(reducer);