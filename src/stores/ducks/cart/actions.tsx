import { action } from 'typesafe-actions';
import { CartTypes, Product } from './types';

export const addProduct = (product: Product) => action(CartTypes.ADD_PRODUCT, { product });
export const removeProduct = (product: Product) => action(CartTypes.REMOVE_PRODUCT, { product });