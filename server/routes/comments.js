const express = require("express");
const passport = require("passport");
const Post = require("../models/Post");
const router = express.Router();

router.post("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ post: "No post found" });
    }
    post.comments.unshift(req.body);
    const savedPost = await post.save();
    const comment = savedPost.comments.find(
      (comment) => comment.comment === req.body.comment
    );
    res.send(comment);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete(
  "/:post_id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const post = await Post.findById(req.params.post_id);
      if (!post) {
        return res.status(404).json({ post: "No post found" });
      }

      const commentIndex = post.comments.findIndex(
        (comment) => comment._id.toString() === req.params.comment_id
      );

      post.comments.splice(commentIndex, 1);
      await post.save();
      res.send({ delete: "success" });
    } catch (e) {
      res.status(500).send(e);
    }
  }
);

module.exports = router;
