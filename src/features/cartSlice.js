import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    DELETE: (products, action) => {
      return products.filter((p) => {
        return p.id != action.payload;
      });
    },

    INCREMENT: (products, action) => {
      for (const product of products) {
        if (product.id === action.payload.id) {
          product.count++;
        }
      }
    },

    DECREMENT: (products, action) => {
      for (const product of products) {
        if (product.id === action.payload.id) {
          product.count--;
        }
      }
    },

    ADD: (products, action) => {
      products.push(action.payload);
    },
  },
});

export const { DELETE, DECREMENT, ADD, INCREMENT } = cartSlice.actions;

export default cartSlice.reducer;
