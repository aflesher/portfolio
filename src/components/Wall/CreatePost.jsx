import React from "react";
import Post from "./Post.jsx";
import SketchPicker from 'react-color';
import _ from 'lodash';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      font: 0,
      color: {
        r: 0,
        b: 0,
        g: 0
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFont = this.handleFont.bind(this);
    this.handleColor = this.handleColor.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit() {
    this.props.onPostCreated(this.state.text, this.state.font, this.state.color);
    this.setState({
      text: '',
      font: 0,
      color: {
        r: 0,
        b: 0,
        g: 0
      }
    });
  }

  handleFont(event) {
    this.setState({font: event.target.value});
  }

  handleColor(color) {
    this.setState({color: _.omit(color.rgb, 'a')});
  }

  render() {
    const fonts = this.props.fonts.map(function(font, i) {
      return <option value={i} key={i}>{font}</option>
    });

    return (
      <div className="wall-create-post">
        <h4>Create a new post</h4>
        <div className="row">
          <div className="col-1 preview">
            preview:
          </div>
          <div className="col-11">
            <Post text={this.state.text} color={this.state.color} hideActions="true" font={this.props.fonts[this.state.font]} index="?" />
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <textarea type="textbox" value={this.state.text} onChange={this.handleChange} className="form-control" maxLength="100" />
          </div>
          <div className="col-2">
            <select className="form-control" value={this.state.font} onChange={this.handleFont}>
              {fonts}
            </select>
          </div>
          <div className="col-2">
            <SketchPicker color={this.state.color} onChangeComplete={this.handleColor} />
          </div>
          <div className="col-1">
            <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Create</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Component;