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
    <p className="ticker" data-title={title}>
        {children}
    </p>
);

export default Ticker;
