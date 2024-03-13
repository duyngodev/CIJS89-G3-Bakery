import { ADD_TO_CART, RESET_QUANTITY, TOGGLE_ADDED_TO_CART } from './actionTypes';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export const saveProductToDatabase = (productData) => async (dispatch) => {
    try {
        const response = await axios.post('/product', productData);
        console.log('Product saved to database:', response.data);
        dispatch({ type: ADD_TO_CART, payload: response.data });
    } catch (error) {
        console.error('Error saving product to database:', error);
    }
};

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});

export const resetQuantity = () => ({
    type: RESET_QUANTITY,
});

export const toggleAddedToCart = () => ({
    type: TOGGLE_ADDED_TO_CART,
});
