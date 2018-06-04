import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }

  handleDetailsClick() {
    if (this.props.handleDetailsClick) {
      this.props.handleDetailsClick(this.props.detailsIndex);
    }
  }

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
            <div className="link" onClick={this.handleDetailsClick}>details/duties</div>
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