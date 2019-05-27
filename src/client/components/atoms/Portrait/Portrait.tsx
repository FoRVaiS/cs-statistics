/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import './Portrait.styles.scss';

const Portrait: React.FC<{
    src: string
    name: string
}> = ({ src, name }): React.ReactElement => (
    <div className="portrait">
        <img src={src} alt={name} className="portrait__img" data-testid="portrait" />
        <p className="portrait__name" data-testid="name">{name}</p>
    </div>
);

export default Portrait;
