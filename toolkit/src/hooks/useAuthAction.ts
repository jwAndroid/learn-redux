import {useMemo} from 'react';
import {bindActionCreators} from 'redux';

import {useAppDispatch} from './../slice/hooks';
import {authoriztion, logout} from '../slice/auth/slice';

export default function useAuthAction() {
  const dispatch = useAppDispatch();

  return useMemo(
    () => bindActionCreators({authoriztion, logout}, dispatch),
    [dispatch],
  );
}
