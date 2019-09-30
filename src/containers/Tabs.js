import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import history from '../history';
import { withRouter } from "react-router";

class Tabs extends Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
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

    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
      history.push(`/my-org${tab}`);
    }
  
    render() {
      const renderTabs = this.data.map((tab, index) => (
        <NavItem key={index}>
          <NavLink
            className={classnames({ active: this.state.activeTab === `${tab.url}` })}
            onClick={() => { this.toggle(`${tab.url}`); }}
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