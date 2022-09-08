import './Calculator.css';

import React, { useState } from 'react';
import CalculatorScreen from './Calculator/ClaculatorScreen';
import CalculatorBtn from './Calculator/CalculatorBtn';
import calculate from '../modules/logic/calculate';

// eslint-disable-next-line react/function-component-definition
const Calculator = () => {
  const [state, setState] = useState({});

  return (
    <div className="calculator-body">
      <CalculatorScreen value={state.next ?? state.total ?? '0'} />
      <div className="actions">
        <CalculatorBtn
          action={() => { setState(calculate(state, 'AC')); }}
          name="ac"
          showName="AC"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '+/-')); }}
          name="sign"
          showName="+/-"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '%')); }}
          name="percent"
          showName="%"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '1')); }}
          name="number-1"
          showName="1"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '2')); }}
          name="number-2"
          showName="2"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '3')); }}
          name="number-3"
          showName="3"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '4')); }}
          name="number-4"
          showName="4"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '5')); }}
          name="number-5"
          showName="5"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '6')); }}
          name="number-6"
          showName="6"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '7')); }}
          name="number-7"
          showName="7"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '8')); }}
          name="number-8"
          showName="8"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '9')); }}
          name="number-9"
          showName="9"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '0')); }}
          name="number-0"
          showName="0"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '.')); }}
          name="decimal"
          showName="."
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '÷')); }}
          name="div"
          showName="/"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, 'x')); }}
          name="times"
          showName="X"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '-')); }}
          name="minus"
          showName="-"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '+')); }}
          name="plus"
          showName="+"
        />
        <CalculatorBtn
          action={() => { setState(calculate(state, '=')); }}
          name="total"
          showName="="
        />
      </div>
    </div>
  );
};

export default Calculator;
