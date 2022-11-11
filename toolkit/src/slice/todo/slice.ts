import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ITodo, Todo} from './type';

const initialState: Todo[] = [];

let nextId = 1;

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: {
      prepare(text: string) {
        const prepared = {payload: {id: nextId, text}};
        nextId += 1;

        return prepared;
      },
      reducer(state, action: PayloadAction<ITodo>) {
        state.push({
          ...action.payload,
          done: false,
        });
      },
    },
    remove(state, action: PayloadAction<number>) {
      const index = state.findIndex(todo => todo.id === action.payload);
      state.splice(index, 1);

      // return state.filter(todo => todo.id !== action.payload);
    },
    toggle(state, action: PayloadAction<number>) {
      const object = state.find(todo => todo.id === action.payload);

      console.log(state);

      if (!object) {
        return;
      }

      object.done = !object.done;
    },
  },
});

export const {add, remove, toggle} = todosSlice.actions;

export default todosSlice.reducer;
