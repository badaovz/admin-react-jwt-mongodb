import { useEffect, useReducer } from "react";
import { createContext } from "react"
import { filterReducer } from "../reducers/filterReducer";

import {
    LOAD_PRODUCTS,
    SET_GRID_VIEW,
    SET_LIST_VIEW,
    SORT_PRODUCTS,
    UPDATE_SORT,
    FILTER_PRODUCTS,
    UPDATE_FILTERS,
    CLEAR_FILTERS,
} from '../actions';
import { useContext } from "react";
import { useProductContext } from "./productContext";

const initialState = {
    filteredProduct: [],
    products: [],
    isGridView: true,
    sort: 'lowest-price',
    filters: {
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        price: 0,
        maxPrice: 0,
        minPrice: 0,
        shippingFee: false
    }
}

const FilterContext = createContext();

export const FilterProvider = ({children}) => {
    const {products} = useProductContext();
    const [state, dispatch] = useReducer(filterReducer, initialState);

    useEffect(()=> {
        dispatch({type: LOAD_PRODUCTS, payload: products})
    }, [products])

    useEffect(() => {
        dispatch({type: SORT_PRODUCTS});
        dispatch({type: FILTER_PRODUCTS});
    }, [state.sort, state.filters])

    const setGridView = () => {
        dispatch({type: SET_GRID_VIEW})
    }
    
    const setListView = () => {
        dispatch({type: SET_LIST_VIEW})
    }

    const updateSort = (e) => {
        const value = e.target.value;
        dispatch({type: UPDATE_SORT, payload: value})
    }

    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === 'category') {
            value = e.target.textContent;
        }

        if(name === 'color') {
            value = e.target.dataset.color
        }

        if(name === 'price') {
            value = Number(value)
        }

        if(name === 'shipping') {
            value = e.target.checked;
        }

        dispatch({type: UPDATE_FILTERS, payload: {name, value}})
    }

    const clearFilter = () => {
        dispatch({type: CLEAR_FILTERS});
    }

    
    return (
        <FilterContext.Provider value={{
            ...state,
            setGridView,
            setListView,
            updateSort,
            updateFilters,
            clearFilter

        }}>
            {children}
        </FilterContext.Provider>
    )
} 


export const useFilterContext = () => {
    return useContext(FilterContext);
}