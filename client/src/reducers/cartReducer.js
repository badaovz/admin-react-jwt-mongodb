import {
    ADD_TO_CART,
    TOGGLE_CART_ITEM,
    REMOVE_CART_ITEM,
    CLEAR_CART,
    COUNT_CART_TOTALS,
    CHANGE_COLOR_CART_ITEM,
    OPEN_CART_COLORS,
} from '../actions';

const cartReducer = (state, action) => {
    if (action.type === ADD_TO_CART) {
        const { id, color, amount, product } = action.payload;
        const tempItem = state.cart.find(
            (cartItem) => cartItem.id === id + color,
        );
        if (tempItem) {
            const tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === id + color) {
                    let newAmount = cartItem.amount + amount;
                    if (newAmount > cartItem.max) newAmount = cartItem.max;

                    return { ...cartItem, amount: newAmount };
                }

                return cartItem;
            });

            return { ...state, cart: tempCart };
        } else {
            const newItem = {
                id: id + color,
                name: product.name,
                color,
                colors: product.colors,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
                shippingFee: product.shipping,
                isSelectColorOpen: false,
            };
            return {
                ...state,
                cart: [...state.cart, newItem],
            };
        }
    }

    if(action.type === TOGGLE_CART_ITEM ) {
        const { id, value} = action.payload;
        const tempCart = state.cart.map(cartItem => {
            if(cartItem.id === id){
                if(value === 'inc'){
                    let newAmount = cartItem.amount + 1;
                    if(newAmount > cartItem.max) newAmount = cartItem.max;
                    return {...cartItem, amount: newAmount}
                }
                if(value === 'dec'){
                    let newAmount = cartItem.amount - 1;
                    if(newAmount < 1) newAmount = 1;
                    return {...cartItem, amount: newAmount}
                }
            }

            return cartItem
        })

        return {
            ...state,
            cart: tempCart
        }
    }

    if(action.type === REMOVE_CART_ITEM) {
        const tempCart = state.cart.filter(cartItem => {
            return cartItem.id !== action.payload
        })

        return {
            ...state,
            cart: tempCart
        }
    } 

    if(action.type === CLEAR_CART) {
        return {
            ...state,
            cart: []
        }
    }

    if(action.type ===  COUNT_CART_TOTALS) {
        const {totalItem, totalCost} = state.cart.reduce((total, cartItem) => {
            total.totalItem += cartItem.amount;
            total.totalItem += cartItem.amount*cartItem.price;
            return total;
        }, {
            totalItem: 0,
            totalCost: 0
        }) 

        return {
            ...state,
            totalCartItem: totalItem,
            totalCartCost: totalCost
        }
    }
    
    if(action.type === CHANGE_COLOR_CART_ITEM) {
        const {id, color} = action.payload;
        const rootId = id.slice(0, id.lastIndexOf('#'))
        const newCart = state.cart.map(cartItem => {
            if(cartItem.id === id){
                if(state.cart.find(i => i.id === rootId+color)){
                    return {
                        ...cartItem,
                        isSelectColorOpen: false
                    }
                }else {
                    return {
                        ...cartItem,
                        id: rootId + color,
                        color,
                        isSelectColorOpen: false,
                    }

                }
            }
            return cartItem;
        })

        return {
            ...state,
            cart: newCart
        }
    }

    if(action.type === OPEN_CART_COLORS) {
        const tempCart = state.cart.map(cartItem => {
            if(cartItem.id === action.payload){
                return {
                    ...cartItem,
                    isSelectColorOpen: true
                }
            }

            return cartItem
        })

        return {
            ...state,
            cart: tempCart
        }
    }

    throw new Error(`Not matching ${action.type} - action type`)
};

export default cartReducer;

