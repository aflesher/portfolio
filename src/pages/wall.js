import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Paginate from "react-paginate";
import WallLib from "../library/wall";
import Post from "../components/Wall/Post.jsx";
import CreatePost from "../components/Wall/CreatePost.jsx";
import _ from "lodash";

let fonts = ['Arial', 'Geneva', 'Georgia', 'Impact', 'Tahoma', 'Verdana'];
let postsPerPage = 10;

class Wall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postsCount: 0,
      currentPage: 1,
      account: ''
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.updatePost = this.updatePost.bind(this);
  }

  getAccount() {
    WallLib.getAccount().then((account) => {
      this.setState({
        account
      })
    });
  }

  updatePosts() {
    let page = this.state.currentPage - 1;
    WallLib.getPosts(page * postsPerPage, ((page + 1) * postsPerPage)).then((posts) => {
      this.setState({posts});
    });
    WallLib.getPostsCount().then((count) => {
      this.setState({postsCount: count});
    });
  }

  createPost(text, font, color) {
    WallLib.createPost(text, font, color.r, color.g, color.b);
  }

  updatePost(index, text, font, color) {
    WallLib.updatePost(index, text, font, color.r, color.g, color.b);
  }

  sellPost(index) {
    WallLib.listForSale(index).then(() => {
    });
  }

  handlePageChange(page) {
    this.setState({
      currentPage: page
    })
  }

  componentWillMount() {
    this.updatePosts();
    this.getAccount();
  }

  render() {
    const posts = this.state.posts.map((post, i) => {
      return <Post
        key={i}
        color={post.color}
        text={post.text}
        index={post.index}
        font={fonts[post.font]}
        account={this.state.account}
        poster={post.poster}
        fonts={fonts}
        onPostUpdated={this.updatePost}
      />
    });

    return (
      <div className="wall">
        <Link to="/">back home</Link>
        <hr />
        <div className="paginate">
          <Paginate
            pageCount={Math.ceil(this.state.postsCount / 10)}
            onPageChange={this.handlePageChange}
            nextLabel=">"
            previousLabel="<"
          />
        </div>
        {posts}
        <CreatePost
          onPostCreated={this.createPost.bind(this)}
          fonts={fonts}
          title="Create new post"
          index={this.state.postsCount}
          confirmLabel="Create"
        />
      </div>
    );
  }
}

export default Wall; 