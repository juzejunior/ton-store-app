import { call, put } from 'redux-saga/effects';
import api  from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* fetchProducts() {
    try {
      const response = yield call(api.get, '/product'); 
      yield put(loadSuccess(response.data["Items"])); 
    } catch(err) {
      yield put(loadFailure());  
    }
}