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
      currentPage: 0,
      account: '',
      showDescription: false
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.toggleDescription = this.toggleDescription.bind(this);
  }

  getAccount() {
    WallLib.getAccount().then((account) => {
      this.setState({
        account
      })
    });
  }

  updatePosts(page) {
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

  sellPost(index, price) {
    WallLib.listForSale(index, price);
  }

  unlistPost(index) {
    WallLib.unlistForSale(index);
  }

  buyPost(index, price) {
    WallLib.buyPost(index, price);
  }

  handlePageChange(resp) {
    this.setState({
      currentPage: resp.selected
    });
    this.updatePosts(resp.selected);
  }

  componentWillMount() {
    this.updatePosts(this.state.currentPage);
    this.getAccount();
  }

  toggleDescription() {
    this.setState({showDescription: !this.state.showDescription});
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
        price={post.price}
        onSell={this.sellPost}
        onUnlist={this.unlistPost}
        onBuy={this.buyPost}
      />
    });

    return (
      <div className="wall">
        <Link to="/">back home</Link>
        <hr />
        <div>
          <button className="btn btn-secondary" type="button" onClick={this.toggleDescription} >
            Description
          </button>
          {this.state.showDescription &&
            <div className="card card-body">
              <p>
                This is a sample application that allows users to post text to a wall using an Ethereum smart contract (on the Ropsten test network).
                Users can write a line of text, with a desired color and font and append it to the bottom of the wall. Any user can also list a post slot
                for sale. Once a slot is for sale any user can pay the asking price and take ownership of the slot.
              </p>
              <p>
                This was only written as a demonstration of a smart contract based web application ...
                it has no real world application :p
              </p>
            </div>
          }
        </div>
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