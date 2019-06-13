import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo-hooks';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import 'normalize.css';
import './Global.styles.scss';

import Home from './pages/Home/Home';

import NotFound from './pages/StatusPages/404';

const client = new ApolloClient({
    link: new HttpLink(),
    cache: new InMemoryCache(),
});

ReactDOM.render((
    <ApolloProvider client={client}>
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route component={(): any => (<NotFound msg="I was sure I had it somewhere around here..." />)} />
            </Switch>
        </Router>
    </ApolloProvider>
), document.querySelectorAll('.react-container')[0]);
