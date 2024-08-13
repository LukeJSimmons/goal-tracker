import { createSlice } from "@reduxjs/toolkit";

import { SaveData, LoadData } from "../SaveHandler";


const goalsSlice = createSlice({
    name: 'goals',
    initialState: LoadData().goals ? LoadData().goals : {goals: []},
    reducers: {
        addGoal: (state, action) => {
            SaveData({goals: [...state, action.payload]});
            return [...state, action.payload]
        },
        deleteGoal: (state, action) => {
            SaveData({goals: state.filter(goal => goal.key !== action.payload)});
            return state.filter(goal => goal.key !== action.payload)
        },
        completeGoal: (state, action) => {
            for (const goal of state) {
                if (goal.key === action.payload) {
                    goal.completed = true;
                }
            }
            SaveData({goals: state});
            return state;
        },
        uncompleteGoal: (state, action) => {
            for (const goal of state) {
                if (goal.key === action.payload) {
                    goal.completed = false;
                }
            }
            SaveData({goals: state});
            return state;
        },
    }
})

export default goalsSlice.reducer;