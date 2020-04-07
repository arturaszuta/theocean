import { createStore, combineReducers } from 'redux';
import logReducer from '../reducers/logReducer';

const rootReducer = combineReducers(
    { log: logReducer }
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;