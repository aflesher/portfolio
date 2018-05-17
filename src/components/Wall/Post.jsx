import React from "react";

class Component extends React.Component {
  render() {
    return (
      <div className="wall-post clearfix">
        <div style={{color: `rgb(${this.props.color.r},${this.props.color.g},${this.props.color.b})`, fontFamily: this.props.font}}>
          {this.props.text}
        </div>
        <div className="post-buttons">
        {this.props.price > 0 && !this.props.hideActions &&
          <div>
            <button type="button" className="btn btn-success">{this.props.salePrice}</button>
          </div>
        }
        {this.props.price != 0 && !this.props.hideActions && this.props.poster == this.props.account &&
          <div className="row">
            <div className="col-8">
              <input type="textbox" placeholder="Wei" className="form-control" />
            </div>
            <div className="col-4">
              <button type="button" className="btn btn-primary">Sell</button>
            </div>
          </div>
        }
        </div>
      </div>
    );
  }
}

export default Component;