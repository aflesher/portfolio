import React from "react";
import Link from "gatsby-link";
import Sidebar from "../components/Sidebar.jsx";
import Main from "../components/Main.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNavItem: 0
    }
  }

  navItemOnClick(index) {
    this.setState({activeNavItem: index});
  }

  render() {
    return (
      <div>
        <Sidebar navItemOnClick={(e) => this.navItemOnClick(e)} activeNavItem={this.state.activeNavItem} />
        <Main activeContentIndex={this.state.activeNavItem} />
      </div>
    );
  }
}

export default Index;
