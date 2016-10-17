"use strict"

import React, { PropTypes } from 'react';

// define component class by extending React.Component
class CounterData extends React.Component {
    /**
     * CounterControls Constructor
     * @param  {Object} props - Component Properties
     */
    constructor(props) {
        super(props)

        this.state = {
            // initial component state
        }
    }

    /**
     * Render the CounterControlds
     * @return {React.Element} - the rendered elment
     */
    render() {
        return (
            <div>
                <h2>Counter Value: {this.props.counterValue}</h2>
                <h2>Total Clicks: {this.props.totalClicks}</h2>
            </div>
        )
    }
}

CounterData.propTypes = {
    counterValue: PropTypes.number.isRequired,
    totalClicks: PropTypes.number.isRequired
}

CounterData.defaultProps = {
    counterValue: 0,
    totalClicks: 0
}


export default CounterData;

