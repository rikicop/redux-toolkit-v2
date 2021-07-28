import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "user",
  initialState: {
    user: 0
  },
  reducers: {
    inuser: (state) => {
      state.user += 1;
    },
    deuser: (state) => {
      state.user -= 1;
    },
    inuserByAmount: (state, action) => {
      state.user = Math.pow(action.payload[0],action.payload[1]) ;
    }
  }
});

// Action creators are generated for each case reducer function
export const { inuser, deuser, inuserByAmount } = counterSlice.actions;

export default counterSlice.reducer;
