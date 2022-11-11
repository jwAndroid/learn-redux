import {useAppSelector} from './../slice/hooks';

export default function useUser() {
  const user = useAppSelector(state => state.auth.user);

  if (!user) {
    return undefined;
  }

  return user;
}
