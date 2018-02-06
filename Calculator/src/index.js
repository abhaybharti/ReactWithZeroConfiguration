import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Frame from './frame';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Frame />, document.getElementById('root'));
registerServiceWorker();

//hot module to reload app not refresh browser page
if (module.hot){
	module.hot.accept();
}