import React from "react";
import { connect } from "react-redux";
import { stateToHTML } from "draft-js-export-html";
import { convertFromRaw } from "draft-js";
import { Helmet } from "react-helmet";
import MetaTags from "react-meta-tags";
import moment from "moment";
import { getPost } from "../store/actions/post";
import PostAuthor from "../components/Posts/PostAuthor";
import CommentForm from "../components/Comments/CommentForm";
import CommentsList from "../components/Comments/CommentsList";

class Post extends React.Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  convertCommentFromJSONToHTML = (text) => {
    return stateToHTML(convertFromRaw(JSON.parse(text)));
  };

  render() {
    const { post } = this.props;
    const { title, body, thumbnail, createdAt } = post;
    const date = moment(createdAt).format("MMMM DD, YYYY");
    let content;
    if (!post || Object.keys(post).length === 0) {
      content = (
        <div className="m-5 text-center">
          <div className="spinner-grow text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      content = (
        <div className="container">
          <div>
            <h2 className="post-title">{title}</h2>
            <div className="text-center">
              <img src={`/images/${thumbnail}`} className="thumbnail" />
            </div>
            <small className="text-muted">
              By Ahmed Ben Gayess - Published on {date}
            </small>
            <div className="mb-5" />
            <div
              className="post-body mb-5"
              dangerouslySetInnerHTML={{
                __html: this.convertCommentFromJSONToHTML(body)
              }}
            />
          </div>
          <PostAuthor />
          {this.props.post.comments && (
            <CommentsList comments={this.props.post.comments} />
          )}
          <CommentForm id={this.props.match.params.id} />
        </div>
      );
    }
    console.log(this.props);
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta
            property="og:image"
            content={`https://ahmedbengayess.com/images/${thumbnail}`}
          />
          <meta
            property="twitter:image"
            content={`https://ahmedbengayess.com/images/${thumbnail}`}
          />
        </Helmet>
        {content}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
