import todoReducer from './todos';
import { createStore } from 'redux';

export default createStore(todoReducer);