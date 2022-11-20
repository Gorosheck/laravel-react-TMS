import { configureStore } from "@reduxjs/toolkit";
import reducer from "./listSlice";

const store = configureStore(
    {
        reducer: {
            items: reducer,
        },
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;