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
                data={[
                    {
                        _: 0,
                    },
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

describe('The data', (): void => {
    it('should render under their respective categories', (): void => {
        const { container } = render(
            <List
                categories={[
                    'Category A',
                    'Category B',
                    'Category C',
                ]}
                data={[
                    {
                        'Category A': 'String A',
                        'Category B': 0,
                        'Category C': 'String C',
                    },
                ]}
            />,
        );

        const itemData = Array.from(container.querySelectorAll('.list__row')).map((item: Element): string[] => {
            const children: Element[] = Array.from(item.children);

            return children.map((dataCell): string => dataCell.innerHTML);
        });

        expect(itemData).toStrictEqual([
            ['String A', '0', 'String C'],
        ]);
    });
});

describe('The list row', (): void => {
    it('should not render when missing data for one or more categories', (): void => {
        const { container } = render(
            <List
                categories={[
                    'Category A',
                    'Category B',
                ]}
                data={[
                    {
                        'Category A': 0,
                    },
                ]}
            />,
        );

        const selector = container.querySelector('.list > tbody') as Element;

        const listRows = Array.from(selector.children).length;

        expect(listRows).toBe(0);
    });
});
