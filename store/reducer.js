import { INC_COUNTER, DEC_COUNTER } from './actionTypes.js';

const initialSate = {
  counter: 0
}

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case INC_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DEC_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}

export default reducer;