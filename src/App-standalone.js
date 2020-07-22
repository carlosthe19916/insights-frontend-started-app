import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Routes } from './Routes-standalone';
import './App.scss';
import '@patternfly/patternfly/patternfly.scss';

import { Provider } from 'react-redux';
import { getRegistry } from '@redhat-cloud-services/frontend-components-utilities/files/Registry';
import {
    NotificationsPortal,
    notifications
} from '@redhat-cloud-services/frontend-components-notifications/';

import {
    Page,
    PageHeader,
    PageSidebar,
    PageHeaderTools,
    Nav,
    NavList,
    NavItem,
    Button
} from '@patternfly/react-core';

import Keycloak from 'keycloak-js';
import { KeycloakProvider } from '@react-keycloak/web';

import { Paths } from './Paths';
import Logo from '../static/images/logo.svg';

const registry = getRegistry();
registry.register({ notifications });

const keycloak = new Keycloak({
    realm: 'c2b88098-c768-4457-b956-2a2d7b6711f5',
    url: 'https://app.please-open.it/auth/',
    clientId: 'pathfinder-ui'
});

class App extends Component {
    render() {
        const Header = (
            <PageHeader
                logo={
                    <React.Fragment>
                        <img style={{ height: '35px' }} src={Logo} alt='Galaxy Logo' />
                    </React.Fragment>
                }
                headerTools={
                    <PageHeaderTools>
                        <Button>Login</Button>
                    </PageHeaderTools>
                }
                showNavToggle
            />
        );

        const Sidebar = (
            <PageSidebar
                theme='dark'
                nav={
                    <Nav theme='dark'>
                        <NavList>
                            <NavItem>
                                <NavLink to={Paths.samplePage} activeClassName='pf-m-current'>SamplePage</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={Paths.oops} activeClassName='pf-m-current'>Oops</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={Paths.noPermissions} activeClassName='pf-m-current'>No permissions</NavLink>
                            </NavItem>
                        </NavList>
                    </Nav>
                }
            />
        );

        return (
            <Provider store={registry.getStore()}>
                <Page isManagedSidebar={true} header={Header} sidebar={Sidebar}>
                    <NotificationsPortal />
                    <KeycloakProvider
                        keycloak={keycloak}
                        initConfig={{ onLoad: 'login-required' }}
                        onTokens={(...tokens) => console.log('KeycloakProvider onToken:', tokens)}
                        onEvent={(event, error) => console.log('KeycloakProvider onEvent:', event, error)}
                    >
                        <Routes />
                    </KeycloakProvider>
                </Page>
            </Provider>
        );

    }
}

App.propTypes = {
    history: PropTypes.object
};

export default withRouter(connect()(App));
