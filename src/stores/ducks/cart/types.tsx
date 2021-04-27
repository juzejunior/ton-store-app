/**
* Action types
*/
export enum CartTypes {
    ADD_PRODUCT = '@products/ADD_PRODUCT',
    REMOVE_PRODUCT = '@products/REMOVE_PRODUCT'
};

/**
 * Data types
 */
export interface Product {
    id: string
    name: string
    price: number
    url: string
}

/**
 * State type
 */
export interface CartState {
   readonly data: Product[]
}