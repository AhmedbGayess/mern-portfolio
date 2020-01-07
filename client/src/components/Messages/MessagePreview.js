import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const MessagePreview = ({ message }) => {
  const date = moment(message.createdAt).format("MM-DD-YYYY hh:mm");
  return (
    <Link
      to={`/admin/admin-message/${message._id}`}
      className="nav-link text-dark"
    >
      <div className="card m-3 p-3">
        <p>
          Sent by: {message.firstName} {message.lastName}
        </p>
        <p>Subject: {message.subject}</p>
        <p>Sent at: {date}</p>
      </div>
    </Link>
  );
};

export default MessagePreview;
