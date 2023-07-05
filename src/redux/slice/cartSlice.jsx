import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  amount: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
   increaseAmount: (state, {payload}) => {
   const item = state.products.find(item => item.name === payload.name);
   item.amount++
   },
   decreaseAmount: (state, {payload}) => {
   const item = state.products.find(item => item.name === payload.name);
   item.amount--
   },

   removeItem: (state, {payload}) => {
    state.products = state.products.filter(item => item.name !== payload.name)
   },
   updateTotalAmount: (state) => {
    let amount = 0;
    let total = 0;
    state.products.forEach(item => {
      amount += item.amount;
      total += item.amount * item.price;
    });
    state.amount = amount
    state.total = total

   },
   addToCart: (state, { payload }) => {
    const existingProduct = state.products.find(item => item.name === payload.name);
    if (existingProduct) {
      existingProduct.amount++;
    } else {
      state.products.push({ ...payload, amount: 1 });
 

    }
  },
   
  }
})

export const { increaseAmount, decreaseAmount, removeItem, updateTotalAmount, addToCart } = cartSlice.actions
export default cartSlice.reducer