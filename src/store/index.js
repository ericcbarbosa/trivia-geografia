import { applyMiddleware, createStore } from 'redux';
import thunkMidleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Reducers } from './reducers';

export default function configureStore(initialState = {}) {
  return createStore(Reducers, initialState, composeWithDevTools(applyMiddleware(thunkMidleware)));
}