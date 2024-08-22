import { configureStore } from "@reduxjs/toolkit";

import goalsReducer from "./components/GoalsSlice";
import labelsReducer from './components/LabelsSlice';


const store = configureStore({
    reducer: {
        goals: goalsReducer,
        labels: labelsReducer,
    }
});

export default store;