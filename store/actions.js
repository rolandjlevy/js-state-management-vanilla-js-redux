import { 
  INC_COUNTER, 
  DEC_COUNTER, 
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO
} from './actionTypes.js';

export const incCounter = () => {
  return { type: INC_COUNTER }
}

export const decCounter = () => {
  return { type: DEC_COUNTER }
}

export const addTodo = (payload) => {
  return { 
    type: ADD_TODO,
    payload
  }
}

export const deleteTodo = (id) => {
  return { 
    type: DELETE_TODO,
    payload: id
  }
}

export const updateTodo = (payload) => {
  return { 
    type: UPDATE_TODO,
    payload
  }
}