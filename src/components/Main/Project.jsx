import React from "react";

class Project extends React.Component {
  render() {
    return (
      <a className={this.props.className} href={this.props.url}>
        <div className="project-inner">
          <div className="title">
            {this.props.title}
          </div>
          <div className="image">
            <img src={this.props.image} />
          </div>
          {this.props.children}
        </div>
      </a>
    );
  }
}

export default Project;