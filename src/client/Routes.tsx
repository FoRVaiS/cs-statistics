import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo-hooks';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import 'normalize.css';
import './Global.styles.scss';

import Home from './domains/Home/Home';

const client = new ApolloClient({
    link: new HttpLink(),
    cache: new InMemoryCache(),
});

ReactDOM.render((
    <ApolloProvider client={client}>
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
        </Router>
    </ApolloProvider>
), document.querySelectorAll('.react-container')[0]);
