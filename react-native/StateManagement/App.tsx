/**
 * @format
 */

import React, { memo } from 'react';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './src/slices';
import { AuthApp } from './src/components';

const store = createStore(rootReducer);
// const store = configureStore({ reducer: rootReducer });

function App() {
  return (
    <Provider store={store}>
      <AuthApp />
    </Provider>
  );
}

export default memo(App);
