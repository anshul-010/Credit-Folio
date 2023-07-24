import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {store} from './redux/store'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store = {store}>
      <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);

reportWebVitals();
