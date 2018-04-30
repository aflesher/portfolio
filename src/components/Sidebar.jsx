import React from "react";
import Link from "./Sidebar/Link.jsx"
import NavItem from "./Sidebar/NavItem.jsx";

import avatar from "../images/avatar.png";
import twitterLogo from "../images/twitter-logo.png";
import linkedinLogo from "../images/linkedin-logo.png";
import mailLogo from "../images/mail-icon.png";

class Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navItem: 0
    }
  }

  navItemClick(index) {
    this.setState({navItem: index});
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <div className="header">
            <div className="avatar">
              <img src={avatar} />
            </div>
            <div className="name">
              Adam Flesher
            </div>
            <div className="title">
              Software Engineer
            </div>
          </div>

          <div className="links">
            <Link icon={linkedinLogo} text="/in/adamflesher" url="https://www.linkedin.com/in/adamflesher/" />
            <Link icon={mailLogo} text="adam.flesher@gmail.com" url="mailto:adam.flesher@gmail.com" />
            <Link icon={twitterLogo} text="@AdamFlesher" url="https://twitter.com/AdamFlesher" />
          </div>

          <div className="nav-items">
            <NavItem name="About Me" active={this.state.navItem} index="0" onClick={(e) => this.navItemClick(e)} />
            <NavItem name="Experience" active={this.state.navItem} index="1" onClick={(e) => this.navItemClick(e)} />
            <NavItem name="Projects" active={this.state.navItem} index="2" onClick={(e) => this.navItemClick(e)} />
          </div>

        </div>
      </div>
    );
  }
}

export default Component;