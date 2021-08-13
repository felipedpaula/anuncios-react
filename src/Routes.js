import React from 'react';
import { Switch,Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

export default () => {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/sobre">
                <About />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/cadastro">
                <Cadastro />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );

}