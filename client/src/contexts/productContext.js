import { createContext, useContext, useEffect, useReducer } from "react";
import productReducer from "../reducers/productReducer";
import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR,
    GET_PRODUCT_BEGIN,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
} from '../action'
import axios from "axios";

const url = 'https://course-api.com/react-store-products';

const ProductContext = createContext();

const initialState = {
    isSidebarOpen: false,
    productLoading: false,
    productError: false,
    products: [],
    featuredProducts: [],
    singleProductLoading: false,
    singleProductError: false,
    singleProduct: {}
}

export const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    const openSidebar = () => {
        dispatch({type: OPEN_SIDEBAR})
    };

    const closeSidebar = () => {
        dispatch({type: CLOSE_SIDEBAR})
    };

    const fetchProducts = async (url) => {
        dispatch({type: GET_PRODUCT_BEGIN })
        try {
            const res = await axios(url);
            const products = res.data;

            dispatch({type: GET_PRODUCT_SUCCESS, payload: products})
        } catch (error) {
            console.log(error)
            dispatch({type: GET_PRODUCT_ERROR})
        }

    }
    const fetchSingleProducts = async (url) => {
        dispatch({type: GET_SINGLE_PRODUCT_BEGIN })
        try {
            const res = await fetch(url)
            const singleProduct = res.json().data;
            dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct})
        } catch (error) {
            console.log(error)
            dispatch({type: GET_SINGLE_PRODUCT_ERROR})
        }

    }

    useEffect(() => {
        fetchProducts(url);
    }, [])


    return (
        <ProductContext.Provider value={{
            ...state,
            openSidebar,
            closeSidebar,
            fetchSingleProducts
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => {
    return useContext(ProductContext);
}