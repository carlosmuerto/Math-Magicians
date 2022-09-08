import PropTypes from 'prop-types';
import React from 'react';

function CalculatorScreen({ value }) {
  return (
    <div className="calculator-screen">
      <p className="calculator-value">{value}</p>
    </div>
  );
}

CalculatorScreen.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CalculatorScreen;
