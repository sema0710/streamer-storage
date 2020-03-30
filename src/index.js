import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './grobalStyle';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <GlobalStyle/>
        <App />
    </Router>, document.getElementById('root'));
serviceWorker.unregister();
