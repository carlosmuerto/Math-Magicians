import './App.css';
import Calculator from '../components/Calculator';
import CalculatorModule from '../modules/CalculatorModule';

function App() {
  return (
    <div className="app">
      <main className="app-main">
        <Calculator calculatorModule={new CalculatorModule()} />
      </main>
    </div>
  );
}

export default App;
