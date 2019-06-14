import React from 'react';

import './Ticker.styles.scss';

const Ticker: React.FC<{
    title: string
    children: React.ReactElement
    unit?: {
        position: 'left' | 'right'
        symbol: string
    }
}> = ({ title, children, unit = { position: 'left', symbol: '' } }): React.ReactElement => (
    <p className="ticker" data-title={title}>
        {
            unit.position === 'left'
                ? unit.symbol + children
                : children + unit.symbol
        }
    </p>
);

export default Ticker;
