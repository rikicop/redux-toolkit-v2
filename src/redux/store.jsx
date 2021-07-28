import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import userReducer from "./user";
import productoReducer from "./producto";

export default configureStore({
  reducer: {
    counter : counterReducer,
    user: userReducer,
    producto: productoReducer,
  }
});
