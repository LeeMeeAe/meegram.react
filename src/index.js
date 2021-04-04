import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/feed.css';
import './style/footer.css';
import './style/globals.css';
import './style/login.css';
import './style/navigation.css';
import './style/reset.css';
import './style/variables.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
