import { Reducer } from 'redux';
import { CartState, CartTypes } from './types';

const INITIAL_STATE: CartState = {
    data: [],
}

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
     case CartTypes.ADD_PRODUCT:
         return { ...state, data: [...state.data, action.payload.product]};
     case CartTypes.REMOVE_PRODUCT:
        return { ...state, data: state.data.filter(item => item.id !== action.payload.product.id)};
     default:
         return state;            
    }
}

export default reducer;