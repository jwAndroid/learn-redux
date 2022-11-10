/**
 * @format
 */

import React, {memo} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from './src/redux/slices';
import HomeScreen from './src/screens/HomeScreen';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default memo(App);
