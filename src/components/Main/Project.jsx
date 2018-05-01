import React from "react";

class Project extends React.Component {
  render() {
    return (
      <a className={this.props.className} href={this.props.url}>
        <div className="project-inner">
          <div className="image">
            <img src={this.props.image} />
          </div>
          <div className="title">
            {this.props.title}
          </div>
          {this.props.children}
        </div>
      </a>
    );
  }
}

export default Project;