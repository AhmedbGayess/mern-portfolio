import React from "react";
import { connect } from "react-redux";
import { getMessages, clearMessages } from "../store/actions/messages";
import Loader from "../components/Common/Loader";
import MessagePreview from "../components/Messages/MessagePreview";

class Messages extends React.Component {
  state = {
    skip: 0
  };

  componentDidMount() {
    this.fetchMessages();
  }

  componentWillUnmount() {
    this.props.clearMessages();
  }

  fetchMessages = () => {
    this.props.getMessages(this.state.skip);
    this.setState({ skip: this.state.skip + 5 });
  };

  render() {
    const { messages } = this.props;
    let content;
    if (messages.length === 0) {
      content = <Loader />;
    } else {
      content = messages.map((message) => (
        <MessagePreview key={message._id} message={message} />
      ));
    }
    return (
      <div className="container page">
        <h1 className="title mt-5">MESSAGES</h1>
        <div>{content}</div>
        <div className="m-5 text-center">
          <button
            onClick={this.fetchMessages}
            className="btn btn-outline-success"
          >
            Load More
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages
});

export default connect(
  mapStateToProps,
  { getMessages, clearMessages }
)(Messages);
