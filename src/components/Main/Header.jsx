import React from "react";
import Link from "../Sidebar/Link.jsx";

import avatar from "../../images/avatar.jpg";
import twitterLogo from "../../images/twitter-logo.png";
import linkedinLogo from "../../images/linkedin-logo.png";
import mailLogo from "../../images/mail-icon.png";
import githubLogo from "../../images/github.png";
import googleDocsLogo from "../../images/google-docs.png";

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
          <Link icon={githubLogo} text="/aflesher" url="https://github.com/aflesher" />
          <Link icon={googleDocsLogo} text="Resume" url="https://docs.google.com/document/d/1eFLlwcZDcNUwEJ22zEKPnmMh5NrU80FZgJtywfC-VBo/edit#heading=h.5x0d5h95i329" />
        </div>
      </div>
    );
  }
}

export default Header;