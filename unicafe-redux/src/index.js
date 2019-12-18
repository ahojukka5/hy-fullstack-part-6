import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer';
import { createStore } from 'redux';
const store = createStore(reducer);

const renderApp = () => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

renderApp();
store.subscribe(renderApp);
