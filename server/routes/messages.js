const express = require("express");
const passport = require("passport");
const nodemailer = require("nodemailer");
const Message = require("../models/Message");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const email = `
    <div>
      <p>Nom: ${req.body.firstName} ${req.body.lastName}</p>
      <p>${req.body.message}</p>
    </div>
    `;
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    let mailOptions = {
      from: req.body.email,
      to: process.env.RECEIVING_MAIL,
      subject: req.body.subject,
      text: "Hello world?",
      html: email
    };
    await transporter.sendMail(mailOptions);
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.send({ sent: true });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const skip = parseInt(req.query.skip) || 0;
    try {
      const messages = await Message.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .skip(skip);

      if (!messages) {
        return res.status(404).json({ messages: "No messages found" });
      }
      res.send(messages);
    } catch (e) {
      res.status(500).send();
    }
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const message = await Message.findById(req.params.id);
      if (!message) {
        return res.status(404).send({ error: "No message found" });
      }
      res.send(message);
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
      const message = await Message.findByIdAndDelete(req.params.id);
      if (!message) {
        return res.status(404).json({ message: "No message found" });
      }
      res.send(message);
    } catch (e) {
      res.status(500).send(e);
    }
  }
);

module.exports = router;
