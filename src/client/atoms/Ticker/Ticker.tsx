import React from 'react';

import './Ticker.styles.scss';

const Ticker: React.FC<{
    title: string
    children: React.ReactElement
    unit?: {
        position: 'left' | 'right'
        symbol: string
    }
}> = ({ title, children }): React.ReactElement => React.cloneElement(children, {
    className: [
        'ticker',
        children.props.className,
    ]
        .filter((className): any => typeof className !== 'undefined' && className !== null && className !== '')
        .join(' '),
    'data-title': title,
});

export default Ticker;
