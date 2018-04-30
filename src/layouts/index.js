import React from "react";
import Link from "gatsby-link";

import './main.scss';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div className="page">
        {children()}
      </div>
    )
  }
}

export default Template
