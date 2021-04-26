import { Reducer } from 'redux';
import { ProductsState, ProductsTypes } from './types';

const INITIAL_STATE: ProductsState = {
    data: [],
    error: false,
    loading: false,
}

const reducer: Reducer<ProductsState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
     case ProductsTypes.LOAD_REQUEST:
         return { ...state, loading: true};
     case ProductsTypes.LOAD_SUCCESS:
        return { ...state, error: false, loading: false, data: action.payload.data };
     case ProductsTypes.LOAD_FAILURE:
        return { ...state, error: true, loading: false, data: [] };
     default:
         return state;            
    }
}

export default reducer;