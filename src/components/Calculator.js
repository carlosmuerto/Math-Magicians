import './Calculator.css';

import React from 'react';
import CalculatorScreen from './Calculator/ClaculatorScreen';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-body">
        <CalculatorScreen value="ERROR" />
      </div>
    );
  }
}

export default Calculator;
