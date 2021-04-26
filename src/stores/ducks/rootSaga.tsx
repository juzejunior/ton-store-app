import { all, takeLatest } from 'redux-saga/effects';

import {ProductsTypes } from './products/types';

import { fetchProducts } from './products/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(ProductsTypes.LOAD_REQUEST, fetchProducts),
    ]);
}