const express = require("express");
const passport = require("passport");
const Project = require("../models/Project");

const router = express.Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const newProject = new Project(req.body);
      await newProject.save();
      res.status(201).send(newProject);
    } catch (e) {
      res.status(500).send(e);
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    if (!projects) {
      return res.status(404).send({ projects: "No projects found" });
    }
    res.send(projects);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).send({ project: "No project found" });
    }

    res.send(project);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
      "name",
      "description",
      "images",
      "technologies",
      "liveDemo",
      "repo"
    ];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid" });
    }
    try {
      const project = await Project.findById(req.params.id);
      if (!project) {
        return res.status(404).send({ project: "No project found" });
      }
      updates.forEach((update) => (project[update] = req.body[update]));
      await project.save();
      res.send(project);
    } catch (e) {
      res.status(500).send();
    }
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const project = await Project.findByIdAndDelete(req.params.id);
      if (!project) {
        return res.status(404).send({ project: "No project found" });
      }

      res.send(project);
    } catch (e) {
      res.status(500).send(e);
    }
  }
);

module.exports = router;
