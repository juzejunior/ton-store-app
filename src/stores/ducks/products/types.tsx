/**
* Action types
*/
export enum ProductsTypes {
    LOAD_REQUEST = '@products/LOAD_REQUEST',
    LOAD_SUCCESS = '@products/LOAD_SUCCESS',
    LOAD_FAILURE = '@products/LOAD_FAILURE'
};

/**
 * Data types
 */
export interface Product {
    id: string
    name: string
    price: number
}

/**
 * State type
 */
export interface ProductsState {
   readonly data: Product[]
   readonly loading: Boolean
   readonly error: Boolean 
}