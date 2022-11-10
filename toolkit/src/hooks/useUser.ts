import {useAppSelector} from './../slice/hooks';

export default function useUser() {
  const user = useAppSelector(state => state.auth.user);

  if (!user || user === undefined || user === null) {
    return undefined;
  }

  return user;
}
