import { createStore } from 'redux';

const initialState = {
  products: [],
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':
      if (!state.cart.find(item => item.id === action.payload.id)) {
        return { ...state, cart: [...state.cart, action.payload] };
      }
      return state;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
