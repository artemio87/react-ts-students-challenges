import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import students from './reducers/StudentReducer';

const reducer = combineReducers({
  students,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
