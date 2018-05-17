import React from "react";
import CreatePost from "./CreatePost.jsx";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }

    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  };

  handleEdit() {
    this.setState({editing: true});
  }

  handleUpdate(text, font, color) {
    this.props.onPostUpdated(this.props.index, text, font, color);
    this.setState({editing: false});
  }

  handleCancel() {
    this.setState({editing: false});
  }

  render() {
    return (
      <div>
        {!this.state.editing &&
          <div className="wall-post clearfix">
            <div style={{color: `rgb(${this.props.color.r},${this.props.color.g},${this.props.color.b})`, fontFamily: this.props.font}}>
              <div className="index" style={{borderColor: `rgb(${this.props.color.r},${this.props.color.g},${this.props.color.b})`}}>
                {this.props.index}
              </div>
              <div className="text">
                {this.props.text}
              </div>
            </div>
            <div className="post-buttons">
              {this.props.price > 0 && !this.props.hideActions &&
                <div>
                  <button type="button" className="btn btn-success">BUY {this.props.salePrice} Wei</button>
                </div>
              }
              {this.props.price != 0 && !this.props.hideActions && this.props.poster == this.props.account &&
                <div className="form-group">
                    <button type="button" className="btn btn-info" onClick={this.handleEdit}>Edit</button>
                    <input type="textbox" placeholder="Wei" className="form-control" />
                    <button type="button" className="btn btn-primary">Sell</button>
                </div>
              }
            </div>
          </div>
        }
        {this.state.editing &&
          <CreatePost
            onPostCreated={this.handleUpdate}
            fonts={this.props.fonts}
            title="Change new post"
            index={this.props.index}
            confirmLabel="Update"
            showCancel={true}
            handleCancel={this.handleCancel}
            text={this.props.text}
            font={this.props.font}
            color={this.props.color}
          />
        }
      </div>
    );
  }
}

export default Component;