/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import './Portrait.styles.scss';

const Portrait: React.FC<{
    src: string
    playerName: string
}> = ({ src, playerName }): React.ReactElement => (
    <div className="portrait">
        <img src={src} alt={playerName} className="portrait__img" data-testid="portrait" />
    </div>
);

export default Portrait;
