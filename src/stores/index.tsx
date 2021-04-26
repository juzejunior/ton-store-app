import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ProductsState } from './ducks/products/types';
import { CartState } from './ducks/cart/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
   products: ProductsState   
   cart: CartState   
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;