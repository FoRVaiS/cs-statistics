/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import './Portrait.styles.scss';

export const Portrait: React.FC<{
    src: string
    name: string
}> = ({ src, name }): React.ReactElement => (
    <div className="portrait">
        <img src={src} alt={name} className="portrait__img" />
        <p className="portrait__name">{name}</p>
    </div>
);
