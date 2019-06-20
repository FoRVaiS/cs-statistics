import React from 'react';

import StatusPage from '../../templates/StatusPage/StatusPage';

export const Forbidden: React.FC<{ msg: string }> = ({ msg }): React.ReactElement => (
    <StatusPage
        error={{
            code: 403,
            text: 'Forbidden',
        }}
        msg={msg}
    />
);
