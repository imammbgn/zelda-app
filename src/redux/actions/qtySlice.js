import { createSlice } from "@reduxjs/toolkit";

const qtySlice = createSlice({
    "name" : "cartQty",
    initialState : {
        qty: 0
    },
    reducers: {
        addQty: (state, action) => {
            state.qty += action.payload
        }
    }
})

export const {addQty} = qtySlice.actions
export default qtySlice.reducer