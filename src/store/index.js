import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./Homeslice";

const movixStore = configureStore({
      reducer  :  {
         'home' : homeSlice,
      }
})

export default movixStore;