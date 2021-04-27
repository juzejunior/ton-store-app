import { action } from 'typesafe-actions';
import { AppAnalyticsTypes } from './types';

export const incrementAppAccessRequest = () => action(AppAnalyticsTypes.INCREMENT_APP_ACCESS_REQUEST);
export const incrementAppAccessSuccess = () => action(AppAnalyticsTypes.INCREMENT_APP_ACCESS_SUCCESS);
export const lncrementAppAccessFailure = () => action(AppAnalyticsTypes.INCREMENT_APP_ACCESS_FAILURE);
