import React from "react";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      font: 1,
      color: '000'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit() {
    this.props.onPostCreated(this.state.text, this.state.font, this.state.color);
  }

  render() {
    return (
      <div className="wall-create-post">
        <h3>Create a new post</h3>
        <div>
          <textarea value={this.state.text} onChange={this.handleChange} />
        </div>
        <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Create Post</button>
      </div>
    );
  }
}

export default Component;