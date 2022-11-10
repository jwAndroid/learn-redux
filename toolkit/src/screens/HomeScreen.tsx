import React, {useCallback, useState} from 'react';
import {Text, SafeAreaView, View} from 'react-native';

import AuthScreen from './AuthScreen';
import ListScreen from './ListScreen';

function HomeScreen() {
  const [isAuthScreen, setIsAuthScreen] = useState(false);

  const onPressAuthScreen = useCallback(() => {
    setIsAuthScreen(true);
  }, []);

  const onPressListScreen = useCallback(() => {
    setIsAuthScreen(false);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 80,
          backgroundColor: 'skyblue',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 30,
        }}>
        <Text
          onPress={onPressAuthScreen}
          style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          Auth
        </Text>

        <Text
          onPress={onPressListScreen}
          style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          List
        </Text>
      </View>

      <View style={{flex: 1, backgroundColor: 'orange'}}>
        {isAuthScreen ? <AuthScreen /> : <ListScreen />}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
