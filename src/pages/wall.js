import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import WallLib from "../library/wall";
import Post from "../components/Wall/Post.jsx";
import CreatePost from "../components/Wall/CreatePost.jsx";
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

  createPost(text, font, color) {
    WallLib.createPost(text, font, color).then(() => {
      this.updatePosts();
    });
  }

  sellPost(index) {
    WallLib.listForSale(index).then(() => {

    });
  }

  componentWillMount() {
    this.updatePosts();
    
  }

  render() {
    const posts = this.state.posts.map(function(post, i) {
      return <Post key={i} color={post.color} text={post.text} index={post.index} />
    });

    return (
      <div>
        <Link to="/">back home</Link>
        <hr />
        {posts}
        <CreatePost onPostCreated={this.createPost.bind(this)} />
      </div>
    );
  }
}

export default Wall; 