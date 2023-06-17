import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./actions/cartSlice";
import loginReducer from "./actions/loginSlice"

 const store = configureStore({
  reducer: {
     cart: cartReducer,
     login: loginReducer 
    },
});

console.log("create store : ", store.getState())

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState())
})

export default store


