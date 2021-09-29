import { INC_COUNTER, DEC_COUNTER } from './actionTypes.js';

export const incCounter = () => {
  return { type: INC_COUNTER }
}

export const decCounter = () => {
  return { type: DEC_COUNTER }
}