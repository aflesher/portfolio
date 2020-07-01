import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Main from "../components/Main.jsx";
import Helmet from "react-helmet"

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNavItem: 0,
      scrollTriggerIsNav: false
    }
  }

  navItemOnClick(index) {
    this.setState({activeNavItem: index, scrollTriggerIsNav: true});
  }

  mainHandleScroll(index) {
    this.setState({activeNavItem: index, scrollTriggerIsNav: false});
  }

  render() {
    return (
      <div className="page">
        <Helmet>
          <title>Adam Flesher</title>
        </Helmet>
        <Sidebar navItemOnClick={(e) => this.navItemOnClick(e)} activeNavItem={this.state.activeNavItem} scrollTriggerIsNav={this.state.scrollTriggerIsNav} />
        <Main activeContentIndex={this.state.activeNavItem} handleScroll={(e) => this.mainHandleScroll(e)} scrollTriggerIsNav={this.state.scrollTriggerIsNav} />
      </div>
    );
  }
}

export default Index;
