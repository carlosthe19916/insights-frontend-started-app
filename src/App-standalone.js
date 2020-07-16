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
import { Paths } from './Paths';
import Logo from '../static/images/logo.svg';

const registry = getRegistry();
registry.register({ notifications });

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
                                <NavLink to={Paths.samplePage} activeClassName="pf-m-current">SamplePage</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={Paths.oops} activeClassName="pf-m-current">Oops</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={Paths.noPermissions} activeClassName="pf-m-current">No permissions</NavLink>
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
                    <Routes />
                </Page>
            </Provider>
        );
    }
}

App.propTypes = {
    history: PropTypes.object
};

export default withRouter(connect()(App));
