import React from 'react';

import StatusPage from '../../templates/StatusPage/StatusPage';

const InternalServerError: React.FC<{ msg: string }> = ({ msg }): React.ReactElement => (
    <StatusPage
        error={{
            code: 500,
            text: 'Internal Server Error',
        }}
        msg={msg}
    />
);

export default InternalServerError;