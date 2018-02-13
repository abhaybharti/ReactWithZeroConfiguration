// ./src/index.js

// Babel polyfill will emulate a full
// ES2015 environemnt so we can enjoy goodies like
// Promises

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';
import 'babel-polyfill';
import { Router } from 'react-router';
import browserHistory from 'history/createBrowserHistory'
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router routes={routes} history={browserHistory} />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();

//hot module to reload app not refresh browser page
if (module.hot){
	module.hot.accept();
}