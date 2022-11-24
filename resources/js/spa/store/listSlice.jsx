import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
   name: 'list',
   initialState: [],
   reducers: {
      add: (state, action) => {
         state.push({ title: action.payload, isDone: false });
      },
      toogle: (state, action) => state.map((value, index) => {
         if (index === action.payload) {
            return { ...value, isDone: !value.isDone };
         }

         return value;
      }),
      remove: (state, action) => state.filter((_, index) => index !== action.payload),
   },
});

const { actions, reducer } = listSlice;

export default reducer;

export const { add, toogle, remove } = actions;

export const getAllItems = state => state.items;