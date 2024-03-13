
import { ADD_TO_CART, RESET_QUANTITY, TOGGLE_ADDED_TO_CART } from './actionTypes';

const initialState = {
  cart: [],
  quantity: 0,
  isAddedToCart: false
};

const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productToStore = action.payload;
      console.log(productToStore);
      const existingProductIndex = state.cart.findIndex(item => item.id === productToStore.id);
      if (existingProductIndex !== -1) {
        const updatedCart = state.cart.map(item => {
          if (item.id === productToStore.id) {
            return { ...item, quantityInCart: item.quantityInCart + productToStore.quantityInCart };
          }
          return item;
        });
        return { ...state, cart: updatedCart, isAddedToCart: true };
      } else {
        return { ...state, cart: [...state.cart, productToStore], isAddedToCart: true };
      }
    case RESET_QUANTITY:
      return { ...state, quantity: 1 };
    case TOGGLE_ADDED_TO_CART:
      return { ...state, isAddedToCart: !state.isAddedToCart };
    default:
      return state;
  }
};

export default singleProductReducer;
