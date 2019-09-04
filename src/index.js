import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './App';

const rootElement = document.getElementClassName('App');
ReactDOM.render(
    <Provider store={configureStore}>
        <App />
    </Provider>,
    rootElement
);
