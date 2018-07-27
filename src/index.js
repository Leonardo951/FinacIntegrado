import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Dashboard from "./container/Dashboard";
import Perfil from "./container/Perfil";
import Login from './container/Login';
import Registrar from './container/Registrar';
import Compras from './container/Compras';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/compras" component={Compras} />
        </Route>
        <Route path='/login' component={Login} />
        <Route path='/registrar' component={Registrar} />
    </Router>, document.getElementById('root'));
registerServiceWorker();
