import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class CalculatorScreen extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <div className="calculator-screen">
        <p className="calculator-value">{value}</p>
      </div>
    );
  }
}

CalculatorScreen.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CalculatorScreen;
