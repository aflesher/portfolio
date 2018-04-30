import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <div>
        <div className="company">
          <div className="icon">
            <img src={this.props.icon} />
          </div>
          <div className="name">
            {this.props.name}
          </div>
          <div className="info">
            <span className="title">{this.props.title} - </span>
            <span className="location">{this.props.location}</span>
          </div>
          <div className="date">
            {this.props.date}
          </div>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Experience;