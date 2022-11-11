import {combineReducers} from 'redux';

import {auth} from './auth';
import {list} from './list';

const rootReducer = combineReducers({
  auth,
  list,
});

export default rootReducer;
