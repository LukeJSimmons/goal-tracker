import { createSlice } from "@reduxjs/toolkit";


const goalsSlice = createSlice({
    name: 'goals',
    initialState: [{}],
    reducers: {
        addGoal: (state, action) => [...state, action.payload],
        deleteGoal: (state, action) => state.filter(goal => goal.title !== action.payload.title),
    }
})

export default goalsSlice.reducer;