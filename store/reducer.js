import { 
  INC_COUNTER, 
  DEC_COUNTER, 
  ADD_TODO,
  DELETE_TODO,
  RESET_TODOS,
  UPDATE_TODO
} from './actionTypes.js';

const initialSate = {
  counter: 0,
  currentTodo: '',
  todos: []
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
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case DELETE_TODO:
    const updatedTodos = state.todos.filter(item => item.id !== action.payload);
      return {
        ...state,
        todos: updatedTodos
      }
    case RESET_TODOS:
      return {
        ...state,
        todos: []
      }
    case UPDATE_TODO:
      return {
        ...state,
        currentTodo: action.payload
      }
    default:
      return state
  }
}

export default reducer;