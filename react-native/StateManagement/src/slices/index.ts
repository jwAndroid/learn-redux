import { combineReducers } from 'redux';

import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;
// 캐스팅 이유는 추후에 useSelector 로 조회할때 이 타입을 참조해야 하기 떄문
// const user = useSelector((state: RootState) => state.auth.user);

export default rootReducer;
