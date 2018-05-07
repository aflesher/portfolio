import React from "react";

import Header from "./Main/Header.jsx";
import NavItem from "./Sidebar/NavItem.jsx";

class Component extends React.Component {

  navItemOnClick(index) {
    if (this.props.navItemOnClick) {
      this.props.navItemOnClick(index);
    }
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <Header />
          <div className="nav-items">
            <NavItem name="About Me" active={this.props.activeNavItem} index="0" onClick={(e) => this.navItemOnClick(e)} />
            <NavItem name="Experience" active={this.props.activeNavItem} index="1" onClick={(e) => this.navItemOnClick(e)} />
            <NavItem name="Open Source Projects" active={this.props.activeNavItem} index="2" onClick={(e) => this.navItemOnClick(e)}  />
            <NavItem name="Resume" active={this.props.activeNavItem} index="3" onClick={(e) => this.navItemOnClick(e)}  />
          </div>

        </div>
      </div>
    );
  }
}

export default Component;