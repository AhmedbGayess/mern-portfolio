const mongoose = require("mongoose");
const validator = require("validator");

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    technologies: [
      {
        type: String,
        enum: [
          "HTML",
          "CSS",
          "Sass",
          "Bootstrap",
          "React",
          "Redux",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "React Native"
        ],
        required: true
      }
    ],
    images: {
      type: [
        {
          type: String,
          required: true
        }
      ],
      validate(value) {
        if (value.length > 5) {
          throw new Error("No more than 5 images");
        }
      }
    },
    liveDemo: {
      type: String,
      default: ""
    },
    repo: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model("projects", ProjectSchema);

module.exports = Project;
