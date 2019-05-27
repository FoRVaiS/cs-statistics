/* eslint-disable react/no-array-index-key */
import React from 'react';

import './List.styles.scss';

const List: React.FC<{
    categories: string[]
}> = ({ categories }): React.ReactElement => (
    <table className="list">
        <thead>
            <tr>
                {categories.map((category, index): any => <th className="list__category" key={`list-category-${index}`}>{category}</th>)}
            </tr>
        </thead>
    </table>
);

export default List;
