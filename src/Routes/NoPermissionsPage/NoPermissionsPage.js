import React from 'react';
import { withRouter } from 'react-router-dom';

import { NotAuthorized } from '@redhat-cloud-services/frontend-components';
import { PageSection } from '@patternfly/react-core';

const NoPermissionsPage = () => {
    return (
        <PageSection>
            <NotAuthorized serviceName='Sample app'/>
        </PageSection>
    );
};

export default withRouter(NoPermissionsPage);
