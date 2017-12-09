import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/home';

const App = () => (
    <section>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
    </section>
);

export default App;
