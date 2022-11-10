import React, {memo} from 'react';
import {View, Text, Pressable} from 'react-native';

function AuthScreen() {
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
          style={{
            backgroundColor: 'gray',
            paddingHorizontal: 40,
            paddingVertical: 20,
          }}>
          <Text>Login</Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: 'gray',
            paddingHorizontal: 40,
            paddingVertical: 20,
          }}>
          <Text>Logout</Text>
        </Pressable>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>user</Text>
      </View>
    </View>
  );
}

export default memo(AuthScreen);
