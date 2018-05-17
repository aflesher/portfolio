import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Paginate from "react-paginate";
import WallLib from "../library/wall";
import Post from "../components/Wall/Post.jsx";
import CreatePost from "../components/Wall/CreatePost.jsx";
import _ from "lodash";

let fonts = ['Arial', 'Geneva', 'Georgia', 'Impact', 'Tahoma', 'Verdana'];

class Wall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postsCount: 0,
      currentPage: 1
    };
  }

  updatePosts() {
    WallLib.getPosts(0, 10).then((posts) => {
      this.setState({posts});
    });
    WallLib.getPostsCount().then((count) => {
      this.setState({postsCount: count});
    });
  }

  createPost(text, font, color) {
    WallLib.createPost(text, font, color.r, color.g, color.b).then(() => {
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
      return <Post key={i} color={post.color} text={post.text} index={post.index} font={fonts[post.font]} />
    });

    return (
      <div className="wall">
        <Link to="/">back home</Link>
        <hr />
        <Paginate />
        {posts}
        <CreatePost onPostCreated={this.createPost.bind(this)} fonts={fonts} />
      </div>
    );
  }
}

export default Wall; 