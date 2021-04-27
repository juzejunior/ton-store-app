import { all, takeLatest } from 'redux-saga/effects';

import {ProductsTypes } from './products/types';

import { AppAnalyticsTypes } from './appAnalytics/types';

import { fetchProducts } from './products/sagas';

import { incrementAppAccess } from './appAnalytics/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(ProductsTypes.LOAD_REQUEST, fetchProducts),
        takeLatest(AppAnalyticsTypes.INCREMENT_APP_ACCESS_REQUEST, incrementAppAccess)
    ]);
}