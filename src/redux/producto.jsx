import { createSlice } from "@reduxjs/toolkit";

export const productoSlice = createSlice({
  name: "producto",
  initialState: {
    name:'manzanas ',
    color: 'verde',
    cantidad: 0,
    payload:''
  },
  reducers: {
    inproducto: (state) => { 
      state.cantidad += 1; 
    },
    deproducto: (state) => { 
      state.cantidad -= 1; 
    },
    nameproducto: (state,action) => { 
      console.log('action.payload: ', action.payload)
      state.name += action.payload;
      /* return state.name */ 
    },
  }
});

// Action creators are generated for each case reducer function
export const { inproducto, deproducto, inproductoByAmount, nameproducto } = productoSlice.actions;

export default productoSlice.reducer;
