import './Calculator.css';

import React from 'react';
import CalculatorScreen from './Calculator/ClaculatorScreen';
import CalculatorBtn from './Calculator/CalculatorBtn';
import calculate from '../modules/logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const stateObj = this.state;
    return (
      <div className="calculator-body">
        <CalculatorScreen value={stateObj.next ?? stateObj.total ?? '0'} />
        <div className="actions">
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, 'AC')); }} name="ac" showName="AC" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '+/-')); }} name="sign" showName="+/-" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '%')); }} name="percent" showName="%" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '1')); }} name="number-1" showName="1" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '2')); }} name="number-2" showName="2" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '3')); }} name="number-3" showName="3" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '4')); }} name="number-4" showName="4" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '5')); }} name="number-5" showName="5" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '6')); }} name="number-6" showName="6" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '7')); }} name="number-7" showName="7" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '8')); }} name="number-8" showName="8" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '9')); }} name="number-9" showName="9" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '0')); }} name="number-0" showName="0" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '.')); }} name="decimal" showName="." />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '÷')); }} name="div" showName="/" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, 'x')); }} name="times" showName="X" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '-')); }} name="minus" showName="-" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '+')); }} name="plus" showName="+" />
          <CalculatorBtn action={() => { this.setState(calculate(stateObj, '=')); }} name="total" showName="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
