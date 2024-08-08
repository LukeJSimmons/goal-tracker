import { createSlice } from "@reduxjs/toolkit";

import { SaveData, LoadData } from "../SaveHandler";


const goalsSlice = createSlice({
    name: 'goals',
    initialState: LoadData().goals,
    reducers: {
        addGoal: (state, action) => {
            SaveData({goals: [...state, action.payload]});
            return [...state, action.payload]
        },
        deleteGoal: (state, action) => {
            SaveData({goals: state.filter(goal => goal.key !== action.payload)});
            return state.filter(goal => goal.key !== action.payload)
        },
    }
})

export default goalsSlice.reducer;