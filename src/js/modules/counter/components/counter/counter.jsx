import React from 'react';
import PropTypes from 'prop-types';
import CounterControls from './subcomponents/counterControls';
import CounterData from './subcomponents/counterData';

const Counter = props => (
  <div className="counter-container">
    <CounterControls
      {...props}
    />
    <CounterData
      {...props}
    />
  </div>
);


Counter.propTypes = {
  onPlusClick: PropTypes.func.isRequired,
  onSubClick: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired,
  counterValue: PropTypes.number.isRequired,
  totalClicks: PropTypes.number.isRequired,
};

export default Counter;
