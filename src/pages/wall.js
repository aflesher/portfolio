import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import WallLib from "../library/wall";
import _ from "lodash";

class Wall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {

    // WallLib.addPost('line 1', 1, 'AA00FF');
    // WallLib.addPost('line 2', 1, 'AA00FF');

    WallLib.getPosts(0, 10).then((posts) => {
      this.setState({posts});
    });
  }

  render() {
    const posts = this.state.posts.map(function(post, i) {
      return <li key={i} style={{color: post.color}}>{post.text}</li>
    });

    return (
      <div>
        <Link to="/">back home</Link>
        <hr />
        <ul>
          {posts}
        </ul>
      </div>
    );
  }
}

export default Wall; 