/**
 * @format
 */

import React, {memo} from 'react';
import {Text, SafeAreaView} from 'react-native';

function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
      }}>
      <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
        hello redux-toolkit!
      </Text>
    </SafeAreaView>
  );
}

export default memo(App);
