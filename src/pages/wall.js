import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import WallLib from "../library/wall";
import Post from "../components/Wall/Post.jsx";
import _ from "lodash";

class Wall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  updatePosts() {
    WallLib.getPosts(0, 10).then((posts) => {
      this.setState({posts});
    });
  }

  componentWillMount() {

    // WallLib.addPost('line 1', 1, 'AA00FF');
    // WallLib.addPost('line 2', 1, 'AA00FF');
    this.updatePosts();
    
  }

  render() {
    const posts = this.state.posts.map(function(post, i) {
      return <Post key={i} color={post.color} text={post.text} />
    });

    return (
      <div>
        <Link to="/">back home</Link>
        <hr />
        {posts}
      </div>
    );
  }
}

export default Wall; 