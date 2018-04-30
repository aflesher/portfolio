import React from "react";

class NavItem extends React.Component {

  handleOnClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(this.props.index);
    }
  }

  render() {
    const isActive = this.props.active == this.props.index ? "active" : "inactive";
    const classes = `${isActive} nav-item`;
    return (
      <div className={classes} onClick={this.handleOnClick}>
        {this.props.name}
      </div>
    );
  }
}

export default NavItem;