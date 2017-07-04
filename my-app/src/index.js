import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/homePage';
import Details from './components/detailsPage';
import About from './components/aboutPage';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
    HashRouter,
    Route,
} from 'react-router-dom';


ReactDOM.render(
    <HashRouter >
        <div>
            <Route path="/" component={App}>
            </Route>
            <Route path="/details" component={Details}>
            </Route>
            <Route path="/home" component={Home}>
            </Route>
            <Route path="/about" component={About}>
            </Route>
        </div>
    </HashRouter >,
    document.getElementById('root')
);
registerServiceWorker();
