const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    body: {
      type: Object,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    comments: [
      {
        comment: {
          type: String,
          required: true
        },
        publishedAt: {
          type: Date,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

const Post = mongoose.model("posts", PostSchema);

module.exports = Post;
