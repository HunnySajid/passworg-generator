import React from 'react';
import ReactDOM from 'react-dom';
import './app/index.css';
import App from './app/App';
import * as serviceWorker from './app/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
