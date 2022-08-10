/**
 * @format
 */

import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './src/redux/rootReducer';
import TodoApp from './src/components/TodoApp';

const store = configureStore({ reducer: rootReducer });

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default memo(App);
