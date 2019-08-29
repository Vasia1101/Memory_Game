import { composeWithDevTools } from 'redux-devtools-extension';
import gameReducer from './reducer/index';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  //   combineReducers({ ...gameReducer }),
  gameReducer,
  composeWithDevTools(applyMiddleware(...[thunk])),
);

export default store;
