import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class CalculatorBtn extends React.Component {
  render() {
    const { action, showName, name } = this.props;
    return (
      <div className={`calculator-btn action-${name}`}>
        <button type="button" className="calculator-showName" onClick={action}>
          {showName ?? name}
        </button>
      </div>
    );
  }
}

CalculatorBtn.propTypes = {
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  showName: PropTypes.string,
};

CalculatorBtn.defaultProps = { showName: null };

export default CalculatorBtn;
