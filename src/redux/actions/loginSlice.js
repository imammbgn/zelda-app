import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        auth: false
    },
    reducers: {
        isLogin: (state, action) => {
           state.auth = action.payload
        }
    }
})

export const { isLogin } = loginSlice.actions
export default loginSlice.reducer