import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { authorize, logout } from '../slices/auth';

export default function useAuthActions() {
  const dispatch = useDispatch();

  // return {
  //   authorize: (user: User) => dispatch(authorize(user)),
  //   logout: () => dispatch(logout()),
  // };

  // bind 사용 반드시 memo 로 감쌀것
  return useMemo(
    () => bindActionCreators({ authorize, logout }, dispatch),
    [dispatch],
  );
}
