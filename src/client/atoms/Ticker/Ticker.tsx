import React from 'react';

import './Ticker.styles.scss';

const Ticker: React.FC<{
    title: string
    children: React.ReactElement
    unit?: {
        position: 'left' | 'right'
        symbol: string
    }
}> = ({ title, children }): React.ReactElement => (
    <span className="ticker">
        {React.cloneElement(children, {
            className: [
                'ticker__content',
                children.props.className,
            ]
                .filter((className): any => typeof className !== 'undefined' && className !== null && className !== '')
                .join(' '),
            'data-title': title,
        })}
    </span>
);

export default Ticker;
