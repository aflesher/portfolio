import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet"

import './main.scss';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div className="page">
        <Helmet>
          <title>Adam Flesher</title>
        </Helmet>
        {children()}
      </div>
    )
  }
}

export default Template
