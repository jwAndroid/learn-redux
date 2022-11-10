import React, {memo, useCallback} from 'react';
import {View, Text, Pressable} from 'react-native';

import useAuthAction from '../hooks/useAuthAction';
import useUser from '../hooks/useUser';

function AuthScreen() {
  const user = useUser();

  const {authoriztion, logout} = useAuthAction();

  const onPressLogin = useCallback(() => {
    const user = {
      id: 1,
      username: 'jw',
      displayName: 'good jw',
    };

    authoriztion(user);
  }, [authoriztion]);

  const onPressLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
          justifyContent: 'space-between',
        }}>
        <Pressable
          onPress={onPressLogin}
          style={{
            backgroundColor: 'gray',
            paddingHorizontal: 40,
            paddingVertical: 20,
          }}>
          <Text>Login</Text>
        </Pressable>

        <Pressable
          onPress={onPressLogout}
          style={{
            backgroundColor: 'gray',
            paddingHorizontal: 40,
            paddingVertical: 20,
          }}>
          <Text>Logout</Text>
        </Pressable>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{user?.id}</Text>

        <Text>{user?.username}</Text>

        <Text>{user?.displayName}</Text>
      </View>
    </View>
  );
}

export default memo(AuthScreen);
