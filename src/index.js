import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { createStore } from 'redux';
import { mainReducer } from './store/mainReducer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop';

const store = createStore(mainReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);
