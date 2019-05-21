import React from 'react';

import './Ticker.styles.scss';

const Ticker: React.FC<{
    title: string
    value: number
    unit?: {
        position: 'left' | 'right'
        symbol: string
    }
}> = ({ title, value, unit = { position: 'left', symbol: '' } }): React.ReactElement => (
    <p className="ticker" data-title={title} data-testid="ticker">
        {
            unit.position === 'left'
                ? unit.symbol + value
                : value + unit.symbol
        }
    </p>
);

export default Ticker;
