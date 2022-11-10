/**
 * @format
 */

import React, {memo} from 'react';
import {Provider} from 'react-redux';

import {store} from './src/slice/store';
import HomeScreen from './src/screens/HomeScreen';

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default memo(App);
