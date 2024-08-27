import { configureStore } from "@reduxjs/toolkit";

import goalsReducer from "./components/GoalsSlice";


const store = configureStore({
    reducer: {
        goals: goalsReducer,
    }
});

export default store;