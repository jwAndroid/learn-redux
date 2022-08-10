import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITodo {
  id: number;
  text: string;
}

export interface Todo extends ITodo {
  done: boolean;
}

const initialState: Todo[] = [
  { id: 1, text: '리덕스 배우기', done: false },
  { id: 2, text: '리액트 네이티브 배우기', done: false },
];

let nextId = 3;

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: {
      prepare(text: string) {
        const prepared = { payload: { id: nextId, text } };
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
      const index = state.findIndex(
        (todo) => todo.id === action.payload,
      );

      state.splice(index, 1);
    },
    toggle(state, action: PayloadAction<number>) {
      const object = state.find((todo) => todo.id === action.payload);

      console.log(state);

      if (!object) {
        return;
      }

      object.done = !object.done;
    },
  },
});

export const { add, remove, toggle } = todosSlice.actions;

export default todosSlice.reducer;
