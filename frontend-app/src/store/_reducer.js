import * as actions from "./actionTypes";

const initial = [];

const reducer = (state = initial, action) => {
    console.log(action);

    switch (action.type) {
        case actions.ADD_ITEM:
            return [
                ...state,
                { title: action.payload, isDone: false }
            ];
        case actions.TOOGLE_ITEM:
            const newItems = [...state];
            newItems[action.payload].isDone = !newItems[action.payload].isDone;

            return { ...state, items: newItems };
        case actions.DELETE_ITEM:
            return state.filter((_, i) => i != action.payload);
        default:
            return state;
    }
};

export default reducer;

export const getAllItems = state => state.items;