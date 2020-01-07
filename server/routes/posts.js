const express = require("express");
const passport = require("passport");
const Post = require("../models/Post");

const router = new express.Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const newPost = new Post(req.body);
    try {
      await newPost.save();
      res.status(201).send(newPost);
    } catch (e) {
      res.status(400).send(e);
    }
  }
);

router.get("/", async (req, res) => {
  const skip = parseInt(req.query.skip) || 0;
  try {
    const posts = await Post.find()
      .limit(4)
      .skip(skip)
      .sort({ createdAt: -1 });
    if (!posts) {
      return res.status(404).json({ posts: "No posts found" });
    }
    res.send(posts);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ post: "No post found" });
    }
    res.json(post);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["title", "description", "body", "thumbnail"];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid" });
    }

    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ post: "No post found" });
      }
      updates.forEach((update) => (post[update] = req.body[update]));
      await post.save();
      res.send(post);
    } catch (e) {
      res.status(500).send(e);
    }
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);
      if (!post) {
        return res.status(404).json({ post: "No post found" });
      }
      res.send(post);
    } catch (e) {
      res.status(500).send(e);
    }
  }
);

module.exports = router;
