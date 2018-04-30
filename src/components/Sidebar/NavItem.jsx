import React from "react";

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  render() {
    const isActive = this.state.active ? "active" : "inactive";
    const classes = `${isActive} nav-item`;

    return (
      <div className={classes}>
        {this.props.name}
      </div>
    );
  }
}

export default NavItem;