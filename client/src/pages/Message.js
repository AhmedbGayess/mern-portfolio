import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { getMessage, deleteMessage } from "../store/actions/message";
import Loader from "../components/Common/Loader";

class Message extends React.Component {
  componentDidMount() {
    this.props.getMessage(this.props.match.params.id);
  }

  deleteMessage = () => {
    this.props.deleteMessage(this.props.match.params.id, this.props.history);
  };

  render() {
    const { message } = this.props;
    const date = moment(message.createdAt).format("MM-DD-YYYY hh:mm");
    let content;
    if (Object.keys(message) === 0) {
      content = <Loader />;
    } else {
      content = (
        <div className="container page">
          <h1 className="mb-5 mt-5 title">MESSAGE</h1>
          <h4 className="mb-4">
            Sent By: {message.firstName} {message.lastName}
          </h4>
          <h4 className="mb-5">Subject: {message.subject}</h4>
          <p className="mb-4">{message.message}</p>
          <p>
            <small className="text-secondary">{date}</small>
          </p>
          <a
            href={`mailto:${message.email}?subject=${message.subject}`}
            className="text-success"
          >
            Send back message
          </a>
          <p className="text-center mt-5">
            <button
              className="btn btn-outline-danger"
              onClick={this.deleteMessage}
            >
              Delete message
            </button>
          </p>
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  message: state.message
});

export default connect(
  mapStateToProps,
  { getMessage, deleteMessage }
)(Message);
