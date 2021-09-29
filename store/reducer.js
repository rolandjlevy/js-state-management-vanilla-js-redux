import { 
  INC_COUNTER, 
  DEC_COUNTER, 
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO
} from './actionTypes.js';

const initialSate = {
  counter: 0,
  todos: [],
  currentTodo: ''
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
      const updatedTodos = state.todos.filter(item => {
        console.log('item.id:',item.id, 'action.payload:', action.payload);
        return item.id != action.payload;
      })
      return {
        ...state,
        todos: updatedTodos
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