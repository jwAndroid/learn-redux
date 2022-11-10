/**
 * @format
 */

import React, {memo} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
}

export default memo(App);
