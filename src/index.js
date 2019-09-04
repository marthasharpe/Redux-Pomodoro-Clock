import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store.js';

import App from './App';

const rootElement = document.getElementClassName('App');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
