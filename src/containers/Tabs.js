import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import history from '../history';
import { withRouter } from "react-router";
import { NavLink as RRNavLink } from "react-router-dom";


class Tabs extends Component {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: this.props.location.pathname
      };
      this.data = [
        {
          title: 'Overview',
          url: '/overview'
        },
        {
          title: 'Network',
          url: '/network'
        },
        {
          title: 'Addons',
          url: '/addons'
        }
      ]
    }

    componentDidMount() {
      if (this.props.location.pathname === "/") {
        history.push('/my-org');
      }
    }
  
    render() {
      let renderTabs = this.data.map((tab, index) => (
        <NavItem key={index}>
          <NavLink
            to={ `/my-org${tab.url}` }
            activeClassName="active"
            tag={RRNavLink}
          >
            {tab.title}
          </NavLink>
        </NavItem>
      ));

      return (
        <Fragment>
          <Nav tabs>
            {renderTabs}
          </Nav>
          {this.props.children}
        </Fragment>
      );
    }
}

export default withRouter(Tabs);