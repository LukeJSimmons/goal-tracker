import { createSlice } from "@reduxjs/toolkit";

import { LoadData } from "../SaveHandler";


const LabelsSlice = createSlice({
    name: 'labels',
    initialState: LoadData().labels ? LoadData().labels : [],
    reducers: {
        addLabel: (state, action) => {
            return [...state, action.payload];
        },
        deleteLabel: (state, action) => {
            return state.filter((label) => label.key !== action.payload);
        },
    },
})

export default LabelsSlice.reducer;