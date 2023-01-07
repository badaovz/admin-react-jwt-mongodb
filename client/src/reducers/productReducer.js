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


const productReducer = (state, action) => {
    if(action.type === OPEN_SIDEBAR) {
        return {
            ...state,
            isSidebarOpen: true
        }
    }

    if(action.type === CLOSE_SIDEBAR) {
        return {
            ...state,
            isSidebarOpen: false
        }
    }

    if(action.type === GET_PRODUCT_BEGIN) {
        return {
            ...state,
            productLoading: true
        }
    }
    
    if(action.type === GET_PRODUCT_SUCCESS) {
        return {
            ...state,
            products: action.payload,
            productLoading: false
        }
    }

    if(action.type === GET_PRODUCT_ERROR) {
        return {
            ...state,
            productLoading: false,
            productError: true
        }
    }

    if(action.type === GET_SINGLE_PRODUCT_BEGIN) {
        return {
            ...state,
            singleProductLoading: true
        }
    }
    
    if(action.type === GET_SINGLE_PRODUCT_SUCCESS) {
        return {
            ...state,
            singleProduct: action.payload,
            singleProductLoading: false
        }
    }

    if(action.type === GET_SINGLE_PRODUCT_ERROR) {
        return {
            ...state,
            singleProductLoading: false,
            singleProductError: true
        }
    }

    throw new Error(`Not matching ${action.type} - action type`)
}


export default productReducer;
