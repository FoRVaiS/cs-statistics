import React from 'react';

import { render, cleanup } from 'react-testing-library';

import List from './List';

afterEach(cleanup);

describe('The list', (): void => {
    it('should render categories when given a list of accepted categories', (): void => {
        const { container } = render(
            <List
                categories={[
                    'Category A',
                    'Category B',
                    'Category C',
                ]}
            />,
        );

        const categories: string[] = [];

        container.querySelectorAll('.list__category').forEach((element): void => {
            categories.push(element.innerHTML);
        });

        expect(categories).toEqual([
            'Category A',
            'Category B',
            'Category C',
        ]);
    });
});
