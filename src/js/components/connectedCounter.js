"use strict"

import Counter from 'components/counter';
import { connect } from 'react-redux';

import {incrementCounter, decrementCounter, resetCounter} from '../actions/counter';


const ConnectedCounter = connect(
    state => ({
        counterValue: state.counter.counterValue,
        totalClicks: state.counter.totalClicks
    }),
    dispatch => ({
        onPlusClick: () => dispatch(incrementCounter()),
        onSubClick: () => dispatch(decrementCounter()),
        onResetClick: () => dispatch(resetCounter())
    })
)(Counter);

export default ConnectedCounter;
