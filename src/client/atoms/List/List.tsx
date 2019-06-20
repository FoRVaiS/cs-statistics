import React from 'react';

import './List.styles.scss';

export const List: React.FC<{
    categories: string[]
    data: { [key: string]: number | string }[],
}> = ({ categories, data }): React.ReactElement => (
    <div className="list">
        <div className="list__row list__row--head">
            {categories.map((category, index): any => <span className="list__category" key={`list-category-${index}`}>{category}</span>)}
        </div>
        {data.map((cellData, rowIndex): any => {
            const isDataComplete = !categories.map((category): boolean => {
                const dataCategories = Object.keys(cellData);

                return dataCategories.includes(category) && cellData[category] !== '';
            })
                .includes(false);

            if (!isDataComplete) {
                console.error(`Incomplete data at index ${rowIndex}`);
                return null;
            }

            return (
                <div className="list__row list__row--body" key={`list-row-${rowIndex}`}>
                    {categories.map((category, itemIndex): any => (
                        <span className={`list__item list__item--${category.toLowerCase().replace(/\W+/g, '-')}`} key={`list-row-${rowIndex}-item-${itemIndex}`}>{cellData[category]}</span>
                    ))}
                </div>
            );
        })}
    </div>
);
