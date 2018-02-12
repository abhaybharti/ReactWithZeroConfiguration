import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';


import ItemList from './components/ItemList';

const store = configureStore(); // You can also pass in an initialState here

ReactDOM.render(
	<Provider store={store}>
		<App /> 
	</Provider>
	, 
	document.getElementById('root')
);
registerServiceWorker();

//hot module to reload app not refresh browser page
if (module.hot){
	module.hot.accept();
}