import React from 'react';

import StatusPage from '../../templates/StatusPage/StatusPage';

export const NotFound: React.FC<{ msg: string }> = ({ msg }): React.ReactElement => (
    <StatusPage
        error={{
            code: 404,
            text: 'Not Found',
        }}
        msg={msg}
    />
);
