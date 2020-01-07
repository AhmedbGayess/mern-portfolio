import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments, id }) => {
  const content = comments.map((comment) => (
    <Comment key={comment._id} comment={comment} id={id} />
  ));
  return (
    <div className="comments mt-5 pt-3">
      <h4>Comments</h4>
      {comments.length < 1 ? (
        <p className="m-3 text-muted">No comments yet</p>
      ) : (
        content
      )}
    </div>
  );
};

export default CommentsList;
