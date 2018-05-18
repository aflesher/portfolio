import React from "react";

class Project extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="project-inner">
          <div className="title">
            {this.props.title}
          </div>
          <div className="image">
            <img src={this.props.image} />
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Project;