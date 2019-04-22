import React from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import { Link, NavLink as RRNavLink } from "react-router-dom";

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/">Todo list App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact tag={RRNavLink} activeClassName="active" to="/">
                  <Trans i18nKey="NAVBAR_HOME"></Trans>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} activeClassName="active" to="/todos">
                  <Trans i18nKey="NAVBAR_TODOS"></Trans>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} activeClassName="active" to="/about/">
                  <Trans i18nKey="NAVBAR_ABOUT"></Trans>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

TopMenu.propTypes = {
  light: PropTypes.bool,
  color: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}