import PropTypes from 'prop-types';
import React from 'react';

function CalculatorBtn({ action, showName, name }) {
  return (
    <div className={`calculator-btn action-${name}`}>
      <button type="button" className="calculator-showName" onClick={action}>
        {showName ?? name}
      </button>
    </div>
  );
}

CalculatorBtn.propTypes = {
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  showName: PropTypes.string,
};

CalculatorBtn.defaultProps = { showName: null };

export default CalculatorBtn;
