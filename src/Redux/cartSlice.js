import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    workshop: [],
    isCartOpen: false,
    quantity: [],
  },
  reducers: {
    addWorkshopsToCart: (state, action) => {
      state.workshop = [...state.workshop, action.payload];
    },
    initializeQuantity: (state, action) => {
      state.workshop = action.payload;
    },
    deleteCartWorkshop: (state, action) => {
      state.workshop = state.workshop.filter((item) => {
        return item.id !== action.payload;
      });
    },
    updateCartUI: (state, action) => {
      state.isCartOpen = action.payload;
    },
    incrementQuantity: (state, action) => {
      state.workshop = action.payload;
    },
    decrementQuantity: (state, action) => {
      state.workshop = action.payload;
    },
  },
});

export const {
  addWorkshopsToCart,
  deleteCartWorkshop,
  initializeQuantity,
  updateCartUI,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
