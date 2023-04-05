import { combineReducers, createStore } from "redux";

import Inireducer from '../Reducers/'

const rootReducer = combineReducers([
    Inireducer,
]);

const store  = createStore(rootReducer);

export default store;