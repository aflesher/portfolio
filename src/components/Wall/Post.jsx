import React from "react";

class Component extends React.Component {
  render() {
    return (
      <div className="wall-post clearfix">
        <div style={{color: this.props.color}}>
          {this.props.text}
        </div>
        <div className="post-buttons">
        {this.props.price > 0 &&
          <div>
            <button type="button" className="btn btn-success">{this.props.salePrice}</button>
          </div>
        }
        {this.props.price != 0 &&
          <div>
            <input type="textbox" placeholder="Wei"/>
            <button type="button" className="btn btn-primary">Sell</button>
          </div>
        }
        </div>
      </div>
    );
  }
}

export default Component;