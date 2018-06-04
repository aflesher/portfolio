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
          <div className="title">
            {this.props.title}
          </div>
          <div className="date">
            {this.props.date}
          </div>
          <div className="details">
            <a href={this.props.detailsLink}>details/duties</a>
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