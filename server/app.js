const express = require("express");
const path = require("path");
require("./db/mongoose");
const cors = require("cors");
const passport = require("passport");
const secure = require("express-force-https");

const app = express();

app.use(express.json());

app.use(cors());

app.use(secure);

const userRouter = require("./routes/user");
const postsRouter = require("./routes/posts");
const commentsRouter = require("./routes/comments");
const messagesRouter = require("./routes/messages");
const projectsRouter = require("./routes/projects");
const uploadsRouter = require("./routes/uploads");

require("./passport/passport")(passport);

app.use("/images", express.static("./uploads"));

app.use("/login", userRouter);
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);
app.use("/messages", messagesRouter);
app.use("/projects", projectsRouter);
app.use("/upload", uploadsRouter);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname + "/../", "client", "build", "index.html")
  );
});

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server is up on port ${port}`));
