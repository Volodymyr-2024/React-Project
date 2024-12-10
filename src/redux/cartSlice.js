import { createSlice } from "@reduxjs/toolkit";

function readFromLocalStorage() {
  try {
    const storage = localStorage.getItem("cart");
    return storage
      ? JSON.parse(storage)
      : { products: [], status: "idle", error: null };
  } catch (error) {
    return { products: [], status: "idle", error: null };
  }
}

function saveToLocalStorage(state) {
  try {
    localStorage.setItem("cart", JSON.stringify(state));
  } catch (error) {}
}

const initialState = readFromLocalStorage();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
        existingProduct.total_price =
          (existingProduct.discount_price || existingProduct.price) *
          existingProduct.quantity;
      } else {
        const priceToUse =
          action.payload.discount_price || action.payload.price;
        state.products.push({
          ...action.payload,
          quantity: action.payload.quantity,
          total_price: priceToUse * action.payload.quantity,
        });
      }
      saveToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      saveToLocalStorage(state);
    },
    deleteCart: (state) => {
      state.products = [];
      saveToLocalStorage(state);
    },
    incrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.quantity++;
        const priceToAdd = product.discount_price || product.price;
        product.total_price += priceToAdd;
        saveToLocalStorage(state);
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product && product.quantity > 1) {
        product.quantity--;
        const priceToSubtract = product.discount_price || product.price;
        product.total_price -= priceToSubtract;
        saveToLocalStorage(state);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  deleteCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
