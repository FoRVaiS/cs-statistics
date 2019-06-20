import React from 'react';

import './StatusPage.styles.scss';

export const StatusPage: React.FC<{
    error: {
        code: number
        text: string
    },
    msg?: string
}> = ({
    error,
    msg,
}): React.ReactElement => (
    <div className="status-page">
        <h1 className="status-page__header">{error.code} {error.text}</h1>
        {msg && <p className="status-page__msg">{msg}</p>}
    </div>
);
