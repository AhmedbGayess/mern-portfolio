import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import { getPosts, clearPosts } from "../store/actions/posts";
import PostListItem from "../components/Posts/PostListItem";
import Loader from "../components/Common/Loader";

class Posts extends React.Component {
  state = {
    skip: 0
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getPosts();
  }

  componentWillUnmount() {
    this.props.clearPosts();
  }

  next = () => {
    if (this.props.posts.length % 4 === 0) {
      const skipToNext = this.state.skip + 4;
      this.props.getPosts(skipToNext);
      this.setState({ skip: this.state.skip + 4 });
    }
  };

  onVisibility = (isVisible) => {
    if (isVisible) {
      this.next();
    }
  };

  render() {
    const { posts } = this.props;
    const link =
      this.props.location.pathname === "/admin/admin-posts"
        ? "/admin/edit-post"
        : "/post";
    let pageContent;
    if (posts.length === 0) {
      pageContent = <Loader />;
    } else {
      pageContent = posts.map((post) => (
        <Link to={`${link}/${post._id}`} key={post._id} className="nav-link">
          <PostListItem post={post} />
        </Link>
      ));
    }

    const titleCss =
      link === "/admin/edit-post"
        ? ["title", "mt-5", "mb-5"]
        : ["title", "page-title", "mb-5"];
    return (
      <div className="container page">
        <h1 className={titleCss.join(" ")}>
          {link === "/admin/edit-post" ? "MY POSTS" : "BLOG"}
        </h1>
        <div>
          {pageContent}
          <div className="text-center m-5">
            <VisibilitySensor onChange={this.onVisibility}>
              <p className="text-white">sa</p>
            </VisibilitySensor>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPosts, clearPosts }
)(Posts);
