import React, { memo, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import useAuthActions from '../hooks/useAuthActions';
import useUser from '../hooks/useUser';
import { RootState } from '../slices';
// import { RootState } from '../slices';
import { authorize, logout } from '../slices/auth';

const styles = StyleSheet.create({
  block: { flex: 1 },
  status: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20 },
});

function AuthStatus() {
  // const user = useSelector((state: RootState) => state.auth.user);
  const user = useUser();

  return (
    <View style={styles.status}>
      <Text style={styles.text}>
        {user ? user.displayName : '로그인 하세요'}
      </Text>
    </View>
  );
}

function AuthButtons() {
  // const dispatch = useDispatch();
  const { authorize, logout } = useAuthActions();

  const onPressLogin = useCallback(() => {
    authorize({
      id: 1,
      username: 'choi-ji-woong',
      displayName: 'jwroid',
    });

    // dispatch(
    //   authorize({
    //     id: 1,
    //     username: 'choi-ji-woong',
    //     displayName: 'jwroid',
    //   }),
    // );
  }, [authorize]);

  // const onPressLogout = useCallback(() => {
  //   // dispatch(logout());
  // }, []);

  return (
    <View>
      <Button title="로그인" onPress={onPressLogin} />
      <Button title="로그아웃" onPress={logout} />
    </View>
  );
}

function AuthApp() {
  return (
    <SafeAreaView style={styles.block}>
      <AuthStatus />
      <AuthButtons />
    </SafeAreaView>
  );
}

export default memo(AuthApp);
