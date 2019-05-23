import React from 'react';

import './PlayerPortrait.styles.scss';

const PlayerPortrait: React.FC<{
    src: string
}> = ({ src }): React.ReactElement => (
    <div className="player-portrait">
        <img src={src} alt="" className="player-portrait__img" data-testid="portrait" />
    </div>
);

export default PlayerPortrait;
