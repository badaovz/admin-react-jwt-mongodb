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

const filterReducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
        const listPrice = action.payload.map((i) => i.price);
        const maxPrice = Math.max(...listPrice);
        return {
            ...state,
            products: [...action.payload],
            filteredProduct: [...action.payload],
            filters: {
                ...state.filters,
                price: maxPrice,
                maxPrice,
            },
        };
    }

    if (action.type === SET_GRID_VIEW) {
        return {
            ...state,
            isGridView: true,
        };
    }

    if (action.type === SET_LIST_VIEW) {
        return {
            ...state,
            isGridView: false,
        };
    }

    if (action.type === SORT_PRODUCTS) {
        let tempProducts = [];
        const { sort, filteredProduct } = state;

        if (sort === 'lowest-price') {
            tempProducts = filteredProduct.sort((a, b) => {
                return a.price - b.price;
            });
        }

        if (sort === 'highest-price') {
            tempProducts = filteredProduct.sort((a, b) => {
                return b.price - a.price;
            });
        }

        if (sort === 'name-a') {
            tempProducts = filteredProduct.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        }

        if (sort === 'name-z') {
            tempProducts = filteredProduct.sort((a, b) => {
                return b.name.localeCompare(a.name);
            });
        }

        return {
            ...state,
            filteredProduct: tempProducts,
        };
    }

    if (action.type === UPDATE_SORT) {
        return {
            ...state,
            sort: action.payload,
        };
    }

    // const initialState = {
    //     filteredProduct: [],
    //     products: [],
    //     isGridView: true,
    //     sort: 'lowest-price',
    //     filters: {
    //         text: '',
    //         company: 'all',
    //         category: 'all',
    //         color: 'all',
    //         price: 0,
    //         maxPrice: 0,
    //         minPrice: 0,
    //         shippingFee: false
    //     }
    // }

    if (action.type === FILTER_PRODUCTS) {
        const { products, filters } = state;
        let tempProducts = [...products];
        const { text, company, category, color, price, shippingFee } = filters;

        if(text) {
            tempProducts = tempProducts.filter(p => p.name.toLowerCase().includes(text.toLowerCase()))

        }
        
        if(company !== 'all') {
            tempProducts = tempProducts.filter(p => p.company === company)
        }
        
        if(category !== 'all') {
            tempProducts = tempProducts.filter(p => p.category === category)
        }

        if(color !== 'all') {
            tempProducts = tempProducts.filter(p => p.color.includes(color))
        }

        tempProducts = tempProducts.filter(p => p.price <= price)

        if(shippingFee) {
            tempProducts = tempProducts.filter(p => p.shipping)
        }

        return {
            ...state,
            filteredProduct: tempProducts
        }

    }

    if(action.type === UPDATE_FILTERS) {
        const {name, value} = action.payload;

        return {
            ...state,
            filters: {
                ...state.filters,
                [name]: value
            }
        }
    }

    if(action.type === CLEAR_FILTERS) {
        return {
            ...state,
            filters: {
                ...state.filters,
                text: '',
                company: 'all',
                category: 'all',
                color: 'all',
                price: state.filters.maxPrice,
                shippingFee: false
            }
        }
    }

    throw new Error(`No matching ${action.type} - action type`)

};

export default filterReducer;