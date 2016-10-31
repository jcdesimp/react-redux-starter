"use strict"

import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducers';

let enhancements = [  ];

const enhancer = compose(
  ...enhancements
);


let store = createStore(
    reducer,
    enhancer
);

export default store;
