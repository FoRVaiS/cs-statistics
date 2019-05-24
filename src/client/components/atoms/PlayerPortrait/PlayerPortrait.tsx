/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import './PlayerPortrait.styles.scss';

const PlayerPortrait: React.FC<{
    src: string
    playerName: string
}> = ({ src, playerName }): React.ReactElement => (
    <div className="player-portrait">
        <img src={src} alt={playerName} className="player-portrait__img" data-testid="portrait" />
    </div>
);

export default PlayerPortrait;
