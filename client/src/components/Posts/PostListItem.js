import React from "react";

const PostListItem = ({ post }) => (
  <div
    className="post-list-item"
    style={{ backgroundImage: `url(/images/${post.thumbnail})` }}
  >
    <div className="post-list-item-card shadow">
      <h3 className="post-list-item-title">{post.title}</h3>
      <p className="post-list-item-body mb-3">{post.description}</p>
    </div>
  </div>
);

export default PostListItem;
