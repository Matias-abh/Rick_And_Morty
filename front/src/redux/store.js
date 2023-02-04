import { createStore, opplyMiddleware, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer.js';
import ThunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware))
);

export default store;