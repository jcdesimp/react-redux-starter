"use strict";

import React from 'react';
import CounterControls from './subcomponents/counterControls';
import CounterData from './subcomponents/counterData';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="counter-container">
                <CounterControls
                    {...this.props}
                />
                <CounterData
                    {...this.props}
                />
            </div>  
        );
    }
}

Counter.propTypes = {
    onPlusClick: React.PropTypes.func.isRequired,
    onSubClick: React.PropTypes.func.isRequired,
    onResetClick: React.PropTypes.func.isRequired,
    counterValue: React.PropTypes.number.isRequired,
    totalClicks: React.PropTypes.number.isRequired
};

export default Counter;
