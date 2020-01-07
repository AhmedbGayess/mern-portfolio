import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { deleteComment } from "../../store/actions/post";

class Comment extends React.Component {
  deleteComment = () => {
    const { deleteComment, id, comment } = this.props;
    deleteComment(id, comment._id);
  };

  render() {
    const { comment, id } = this.props;
    const date = moment(comment.publishedAt).format("MM-DD-YYYY hh:mm");
    return (
      <div className="m-5 border-bottom">
        <p>{comment.comment}</p>
        <small>Published at {date}</small>
        {id && (
          <div className="text-right">
            <small
              className="text-danger"
              style={{ cursor: "pointer" }}
              onClick={this.deleteComment}
            >
              Delete
            </small>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { deleteComment }
)(Comment);
