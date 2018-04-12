import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App_Chapter1 from './App_Chapter1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App_Chapter1 />, document.getElementById('root'));
registerServiceWorker();

//hot module to reload app not refresh browser page
if (module.hot){
	module.hot.accept();
}
