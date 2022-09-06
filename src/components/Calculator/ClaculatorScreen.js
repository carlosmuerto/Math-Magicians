import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class CalculatorScreen extends React.Component {
  constructor({ value }) {
    super({ value });
    this.state = {
      value,
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <div className="calculator-screen" />
        <p className="calculator-value">{value}</p>
        <div />
      </div>
    );
  }
}

CalculatorScreen.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CalculatorScreen;
