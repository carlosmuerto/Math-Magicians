import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';
import HomePage from './pages/Home/homePage';
import QuotePage from './pages/Quote/QuotePage';
import CalculatorPage from './pages/Calculator/CalculatorPage';
import Header from './components/Header/Header';

const links = [
  {
    path: '/',
    text: 'Home',
    element: (<HomePage />),
  },
  {
    path: '/quote',
    text: 'Quote',
    element: (<QuotePage />),
  },
  {
    path: '/calculator',
    text: 'Calculator',
    element: (<CalculatorPage />),
  },
];

const App = () => (
  <div className="app">
    <Router>
      <Header links={links} />
      <Routes>
        {links.map((link) => (
          <Route
            key={`RouteTo:${link.text}`}
            path={link.path}
            element={link.element}
          />
        ))}
      </Routes>
    </Router>
  </div>
);

export default App;
