import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';

import Map from '../pages/map/index';
import Home from '../pages/Home/index'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/map" component={Map} />
            </Switch>
        </BrowserRouter>
    )
}