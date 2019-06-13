import React from 'react';

import StatusPage from '../../templates/StatusPage/StatusPage';

const ServiceUnavailable: React.FC<{ msg: string }> = ({ msg }): React.ReactElement => (
    <StatusPage
        error={{
            code: 503,
            text: 'Service Unavailable',
        }}
        msg={msg}
    />
);

export default ServiceUnavailable;
