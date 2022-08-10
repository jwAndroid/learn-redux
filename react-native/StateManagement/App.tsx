/**
 * @format
 */

import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './src/slices/rootReducer';
import { AuthApp } from './src/components';

const store = configureStore({ reducer: rootReducer });

function App() {
  return (
    <Provider store={store}>
      <AuthApp />
    </Provider>
  );
}

export default memo(App);
