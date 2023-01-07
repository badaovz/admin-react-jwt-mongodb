import { useReducer } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import cartReducer from '../reducers/cartReducer';
import { useEffect } from 'react';

import {
    ADD_TO_CART,
    TOGGLE_CART_ITEM,
    REMOVE_CART_ITEM,
    CLEAR_CART,
    COUNT_CART_TOTALS,
    CHANGE_COLOR_CART_ITEM,
    OPEN_CART_COLORS,
} from '../actions';

const getCart = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);
    }
    return [];
};

const initialState = {
    cart: getCart(),
    totalCartItem: 0,
    totalCartCost: 0,
    shippingFee: 543,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({
            type: ADD_TO_CART,
            payload: { id, color, amount, product },
        });
    };

    const toggleCartItem = (id, value) => {
        dispatch({ type: TOGGLE_CART_ITEM, payload: { id, value } });
    };

    const removeCartItem = (id) => {
        dispatch({ type: REMOVE_CART_ITEM, payload: id });
    };

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    const changeColorCartItem = (id, color) => {
        dispatch({ type: CHANGE_COLOR_CART_ITEM, payload: { id, color } });
    };

    const openCartColors = (id) => {
        dispatch({ type: OPEN_CART_COLORS, payload: id });
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
        dispatch({ type: COUNT_CART_TOTALS });
    }, [state.cart]);


    return (
        <CartContext.Provider
            value={{
                ...state,
                addToCart,
                toggleCartItem,
                removeCartItem,
                clearCart,
                changeColorCartItem,
                openCartColors,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext);
};
