/* eslint-disable react/no-array-index-key */
import React from 'react';

import './List.styles.scss';

const List: React.FC<{
    categories: string[]
    data: { [key: string]: number | string }[],
}> = ({ categories, data }): React.ReactElement => (
    <table className="list">
        <thead>
            <tr>
                {categories.map((category, index): any => <th className="list__category" key={`list-category-${index}`}>{category}</th>)}
            </tr>
        </thead>
        <tbody>
            {data.map((cellData, rowIndex): any => {
                const isDataComplete = !categories.map((category): boolean => Object.keys(cellData)
                    .includes(category))
                    .includes(false);

                if (!isDataComplete) return null;

                return (
                    <tr className="list__row" key={`list-row-${rowIndex}`}>
                        {categories.map((category, itemIndex): any => (
                            <td className="list__item" key={`list-row-${rowIndex}-item-${itemIndex}`}>{cellData[category]}</td>
                        ))}
                    </tr>
                );
            })}
        </tbody>
    </table>
);

export default List;
