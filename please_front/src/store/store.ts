import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "@store/common";

const store = configureStore ({
    reducer: {
        common: commonReducer,
    },
});

export default store;