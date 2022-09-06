import './Calculator.css';

import PropTypes from 'prop-types';
import React from 'react';
import CalculatorScreen from './Calculator/ClaculatorScreen';
import CalculatorBtn from './Calculator/CalculatorBtn';
import CalculatorModule from '../modules/CalculatorModule';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.calculatorModule = props.calculatorModule;
  }

  render() {
    return (
      <div className="calculator-body">
        <CalculatorScreen value={this.calculatorModule.printScreen()} />
        <div className="actions">
          <CalculatorBtn action={() => { }} name="ac" showName="AC" />
          <CalculatorBtn action={() => { }} name="sign" showName="+/-" />
          <CalculatorBtn action={() => { }} name="percent" showName="%" />
          <CalculatorBtn action={() => { }} name="number-1" showName="1" />
          <CalculatorBtn action={() => { }} name="number-2" showName="2" />
          <CalculatorBtn action={() => { }} name="number-3" showName="3" />
          <CalculatorBtn action={() => { }} name="number-4" showName="4" />
          <CalculatorBtn action={() => { }} name="number-5" showName="5" />
          <CalculatorBtn action={() => { }} name="number-6" showName="6" />
          <CalculatorBtn action={() => { }} name="number-7" showName="7" />
          <CalculatorBtn action={() => { }} name="number-8" showName="8" />
          <CalculatorBtn action={() => { }} name="number-9" showName="9" />
          <CalculatorBtn action={() => { }} name="number-0" showName="0" />
          <CalculatorBtn action={() => { }} name="decimal" showName="." />
          <CalculatorBtn action={() => { }} name="div" showName="/" />
          <CalculatorBtn action={() => { }} name="times" showName="X" />
          <CalculatorBtn action={() => { }} name="minus" showName="-" />
          <CalculatorBtn action={() => { }} name="plus" showName="+" />
          <CalculatorBtn action={() => { }} name="total" showName="=" />
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  calculatorModule: PropTypes.instanceOf(CalculatorModule).isRequired,
};

export default Calculator;
