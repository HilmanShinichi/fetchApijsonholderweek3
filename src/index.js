import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux' // ADDED CODE
import { Provider } from 'react-redux' // ADDED CODE
import ReducerFunc from './Redux/Reducers/ReducerFunc'
import App from './App';
const store = createStore(ReducerFunc)
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));