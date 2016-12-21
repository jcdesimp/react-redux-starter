"use strict";

import { connect } from 'react-redux';

import Counter from './counter';
import * as actions from '../../actions';

export default connect(
    state => ({
        counterValue: state.counter.counterValue,
        totalClicks: state.counter.totalClicks
    }),
    dispatch => ({
        onPlusClick: () => dispatch(actions.incrementCounter()),
        onSubClick: () => dispatch(actions.decrementCounter()),
        onResetClick: () => dispatch(actions.resetCounter())
    })
)(Counter);
