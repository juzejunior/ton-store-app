import { call, put } from 'redux-saga/effects';
import counterApi from '../../../services/counterApi';

import { incrementAppAccessSuccess, lncrementAppAccessFailure } from './actions';

export function* incrementAppAccess() {
    try {
      const response = yield call(counterApi.get, '/appAccessCounter'); 
      yield put(incrementAppAccessSuccess()); 
    } catch(err) {
      yield put(lncrementAppAccessFailure());  
    }
}