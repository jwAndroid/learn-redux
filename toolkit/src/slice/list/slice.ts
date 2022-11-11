import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {List} from './type';

const initialState: List[] = [
  {
    id: 1,
    text: 'hello redux',
  },
];

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    fullfiled(state, action: PayloadAction<List[]>) {
      return [...state, ...action.payload];
    },
    add(state, action: PayloadAction<List>) {
      return [...state, action.payload];
    },
    remove(state, action: PayloadAction<number>) {
      return state.filter(item => item.id !== action.payload);
    },
    update(state, action: PayloadAction<List>) {
      return state.map(item =>
        item.id === action.payload.id ? {...action.payload} : item,
      );
    },
  },
});

export default listSlice.reducer;

export const {fullfiled, add, remove, update} = listSlice.actions;
