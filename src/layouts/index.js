import React from "react";
import Helmet from "react-helmet"

import favicon from "../images/favicon.ico";

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div>
        <Helmet>
          <link rel="shortcut icon" href={favicon} type="image/png" />
        </Helmet>
        {children()}
      </div>
    )
  }
}

export default Template
