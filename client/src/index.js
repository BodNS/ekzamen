/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Setup from './boot/setup';
import {Provider} from 'react-redux';
import App from './App';
import store from './store.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));


serviceWorker.unregister();
