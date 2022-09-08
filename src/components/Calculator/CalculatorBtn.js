import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line react/function-component-definition
const CalculatorBtn = ({ action, showName, name }) => (
  <div className={`calculator-btn action-${name}`}>
    <button type="button" className="calculator-showName" onClick={action}>
      {showName ?? name}
    </button>
  </div>
);

CalculatorBtn.propTypes = {
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  showName: PropTypes.string,
};

CalculatorBtn.defaultProps = { showName: null };

export default CalculatorBtn;
