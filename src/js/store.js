"use strict";
/* global process */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import counter from 'modules/counter';

let reducer = combineReducers({
    [counter.constants.name]: counter.reducer,
    routing: routerReducer
});

let DevTools = (process.env.NODE_ENV !== 'production') ? 
require('lib/components/devTools').default : f => f;

let enhancements = [ applyMiddleware(thunk) ];
process.env.NODE_ENV === 'production' ? f => f :
enhancements.push(DevTools.instrument());

const enhancer = compose(
  ...enhancements
);


let store = createStore(
    reducer,
    enhancer
);

export default store;
