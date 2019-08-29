import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import gameReducer from './reducer/index';

const store = createStore(gameReducer, devToolsEnhancer());

export default store;
