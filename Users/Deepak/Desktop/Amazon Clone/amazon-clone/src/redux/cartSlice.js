import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  productsNumber: null,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //check if in product array
      const addProductExists = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (addProductExists) {
        addProductExists.quantity += parseInt(action.payload.quntity);
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity),
        });
      }
      state.productsNumber =
        state.productsNumber + parseInt(action.payload.quantity);
    },
    clearCart: (state) => {
        state.products = [];
       
      },
    removeFromCart: (state, action) => {
        // find the product removing the array
        const productToRemove = state.products.find(
          (product) => product.id === action.payload
        );
        // remove the quantity from product number
        state.productsNumber = state.productsNumber - productToRemove.quantity;
        // find index of the product removing
        const index = state.products.findIndex(
          (product) => product.id === action.payload
        );
        // remove from the array
        state.products.splice(index, 1);
      },
      incrementInCart: (state, action) => {
        const itemInc = state.products.find((item) => item.id === action.payload);
        if (itemInc.quantity >= 1) {
          itemInc.quantity = itemInc.quantity + 1;
        }
        state.productsNumber = state.productsNumber + 1;
      },
      decrementInCart: (state, action) => {
        const itemDec = state.products.find((item) => item.id === action.payload);
        if (itemDec.quantity === 1) {
          const index = state.products.findIndex(
            (item) => item.id === action.payload
          );
          state.products.splice(index, 1);
        } else {
          itemDec.quantity--;
        }
        state.productsNumber = state.productsNumber - 1;
      },
    
  },
});
const cartReducer = cartSlice.reducer;
export const { addToCart, clearCart , removeFromCart , incrementInCart, decrementInCart} = cartSlice.actions;
export default cartReducer;
