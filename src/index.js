import store from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('demo');
ReactDOM.render(<Provider store={store}><App/></Provider>, rootElement);