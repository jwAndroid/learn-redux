import {combineReducers} from 'redux';

import {auth} from './auth';
import {list} from './list';
import {todo} from './todo';

const rootReducer = combineReducers({
  auth,
  list,
  todo,
});

export default rootReducer;
