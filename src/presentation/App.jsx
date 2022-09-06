import './App.css';
import Calculator from '../components/Calculator';
import CalculatorModule from '../modules/CalculatorModule';

function App() {
  return (
    <div className="app">
      <header className="app-header">Calculator</header>
      <main className="app-main">
        <Calculator calculatorModule={new CalculatorModule()} />
      </main>
    </div>
  );
}

export default App;
