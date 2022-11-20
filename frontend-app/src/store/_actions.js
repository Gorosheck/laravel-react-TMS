import { ADD_ITEM, DELETE_ITEM, TOOGLE_ITEM } from "./actionTypes";

export const addListItem = title => ({
   type: ADD_ITEM,
   payload: title,
});

export const toogleListItem = id => ({
   type: TOOGLE_ITEM,
   payload: id,
});

export const deleteListItem = id => ({
   type: DELETE_ITEM,
   payload: id,
});