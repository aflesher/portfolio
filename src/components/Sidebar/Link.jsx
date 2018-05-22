import React from "react";

class Link extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="link row">
        <div className="icon col-2">
          <img src={this.props.icon} />
        </div>
        <div className="url col-10">
          <a href={this.props.url} target="_blank">{this.props.text}</a>
        </div>
      </div>
    );
  }
}

export default Link;