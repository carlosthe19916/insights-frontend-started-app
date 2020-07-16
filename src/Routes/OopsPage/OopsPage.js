import React from 'react';
import { withRouter } from 'react-router-dom';

import { Unavailable } from '@redhat-cloud-services/frontend-components';
import { PageSection } from '@patternfly/react-core';

const OopsPage = () => {
    return (
        <PageSection>
            <Unavailable/>
        </PageSection>
    );
};

export default withRouter(OopsPage);
