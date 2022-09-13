import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line react/function-component-definition
const CalculatorScreen = ({ value }) => (
  <div className="calculator-screen">
    <p className="calculator-value">{value}</p>
  </div>
);

CalculatorScreen.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CalculatorScreen;
