import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./actions/cartSlice";
import loginReducer from "./actions/loginSlice"
import sliderReducer from "./actions/sliderSlice";

 const store = configureStore({
  reducer: {
     cart: cartReducer,
     login: loginReducer, 
     slider: sliderReducer
    },
});

// console.log("create store : ", store.getState())

// store.subscribe(() => {
//   console.log("STORE CHANGE : ", store.getState())
// })

export default store


