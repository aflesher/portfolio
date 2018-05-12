import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet"

import './main.scss';
import favicon from "../images/favicon.ico";

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div className="page">
        <Helmet>
          <title>Adam Flesher</title>
          <link rel="shortcut icon" href={favicon} type="image/png" />
        </Helmet>
        {children()}
      </div>
    )
  }
}

export default Template
