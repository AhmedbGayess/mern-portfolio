import React from "react";
import { connect } from "react-redux";
import FormTextArea from "../Common/FormTextArea";
import { addComment } from "../../store/actions/post";

class CommentForm extends React.Component {
  state = {
    comment: "",
    error: ""
  };

  onChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await this.validate();
    if (this.state.error) {
      return;
    }
    await this.props.addComment(this.props.id, this.state.comment);
    this.setState({ comment: "" });
  };

  validate = () => {
    if (this.state.comment.trim() === "") {
      this.setState({ error: "Please add a comment" });
    } else {
      this.setState({ error: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="mb-5">
        <FormTextArea
          onChange={this.onChange}
          value={this.state.comment}
          label="Add a comment"
          name="comment"
          placeholder="Say something about this post..."
          error={this.state.error}
        />
        <button className="message-button">Add Comment</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addComment }
)(CommentForm);
