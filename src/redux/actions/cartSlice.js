import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: []
    },
    reducers: {
        addToCart: (state, action) => {
            const itemCart = state.data.find(
                (item) => item.id === action.payload.id
            )
            if(itemCart){
                itemCart.qty++
            }
            else{
                state.data.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload)
        },
        resetCart: (state, action) => {
            state.data = state.data.map(item => item.qty = action)
        }
    }
})

export const {addToCart, removeFromCart, resetCart} = cartSlice.actions
export default cartSlice.reducer