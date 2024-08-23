import { createSlice } from "@reduxjs/toolkit";

import { LoadData } from "../SaveHandler";


const goalsSlice = createSlice({
    name: 'goals',
    initialState: LoadData().goals !== null || undefined ? LoadData().goals : [],
    reducers: {
        addGoal: (state, action) => {
            return [...state, action.payload]
        },
        deleteGoal: (state, action) => {
            return state.filter(goal => goal.key !== action.payload)
        },
        completeGoal: (state, action) => {
            for (const goal of state) {
                if (goal.key === action.payload) {
                    goal.completed = true;
                }
            }
            return state;
        },
        uncompleteGoal: (state, action) => {
            for (const goal of state) {
                if (goal.key === action.payload.Key) {
                    goal.completed = false;
                    goal.dueDate = action.payload.newDueDate;
                }
            }
            return state;
        },
    }
})

export default goalsSlice.reducer;