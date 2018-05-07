import React from "react";
import Link from "../Sidebar/Link.jsx";

import avatar from "../../images/avatar.png";
import twitterLogo from "../../images/twitter-logo.png";
import linkedinLogo from "../../images/linkedin-logo.png";
import mailLogo from "../../images/mail-icon.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
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
      </div>
    );
  }
}

export default Header;