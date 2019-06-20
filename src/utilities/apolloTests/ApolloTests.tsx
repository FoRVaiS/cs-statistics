import React from 'react';

import { render, RenderResult } from 'react-testing-library';

import { ApolloProvider } from 'react-apollo-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { MockLink, MockedResponse } from 'apollo-link-mock';

const createClient = (mocks: MockedResponse[]): any => new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: new MockLink(mocks),
});

const waitForNextTick = (): Promise<void> => new Promise((res): any => setTimeout(res, 0));

export const renderHooks = async (mocks: MockedResponse[], component: JSX.Element): Promise<RenderResult> => {
    const container = render(
        <ApolloProvider client={createClient(mocks)}>
            {component}
        </ApolloProvider>,
    );

    await waitForNextTick();

    return container;
};
