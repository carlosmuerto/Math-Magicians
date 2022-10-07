import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Helmet } from 'react-helmet';
import App from './presentation/App';
import reportWebVitals from './modules/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/34493013/194669334-9fcb4d2e-77ba-4c87-a38d-886b5811cb95.png"
      />
    </Helmet>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
