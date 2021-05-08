import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Layout from '../templates/Layout';

export default function CustomRoute() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Layout} />
                <Route path="/home">
                    <Layout />
                </Route>
            </Switch>
        </Router>
    );
}
