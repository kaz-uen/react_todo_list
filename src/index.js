import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalCss';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>
  </React.StrictMode>
);
