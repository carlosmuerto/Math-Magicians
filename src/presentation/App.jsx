import './App.css';
import React from 'react';
import Calculator from '../components/Calculator';
import CalculatorModule from '../modules/CalculatorModule';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <main className="app-main">
          <Calculator calculatorModule={new CalculatorModule()} />
        </main>
      </div>
    );
  }
}

export default App;
