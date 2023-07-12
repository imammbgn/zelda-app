import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
    name: "slider",
    initialState: {
        range : 500000
    },
    reducers: {
        isSlider: (state, action) => {
           state.range = action.payload
        }
    }
})

export const { isSlider } = sliderSlice.actions
export default sliderSlice.reducer