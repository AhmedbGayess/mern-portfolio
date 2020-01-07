import React from "react";
import { connect } from "react-redux";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import {
  createPost,
  getPost,
  editPost,
  deletePost,
  deleteComment
} from "../store/actions/post";
import PostForm from "../components/Admin-Posts/PostForm";
import Delete from "../components/Common/Delete";
import CommentsList from "../components/Comments/CommentsList";
import ImageZone from "../components/Admin-Posts/ImageZone";
import TextEditor from "../components/Admin-Posts/TextEditor";

class EditPostPage extends React.Component {
  state = {
    title: "",
    description: "",
    editorState: EditorState.createEmpty(),
    thumbnail: ""
  };

  async componentDidMount() {
    const postId = this.props.match.params.id;
    if (postId) {
      await this.props.getPost(postId);
      const { title, description, body, thumbnail } = this.props.post;
      const fetchedState = convertFromRaw(JSON.parse(body));
      const editorState = EditorState.createWithContent(fetchedState);
      this.setState({
        title,
        description,
        editorState,
        thumbnail
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  onDrop = (acceptedFiles, rejectedFiles) => {
    const formData = new FormData();
    formData.append("images", acceptedFiles[0]);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .post("/upload", formData, config)
      .then((response) => {
        this.setState({
          thumbnail: response.data.file
        });
      })
      .catch((error) => alert("Upload Error"));
  };

  deleteImage = () => {
    axios
      .delete(`/upload/${this.state.thumbnail}`)
      .then(() => this.setState({ thumbnail: "" }))
      .catch((err) => console.log(err));
  };

  onSubmit = () => {
    const postId = this.props.match.params.id;
    const { title, description, editorState, thumbnail } = this.state;
    const body = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    if (postId) {
      this.props.editPost(
        postId,
        {
          title,
          description,
          body,
          thumbnail
        },
        this.props.history
      );
    } else {
      this.props.createPost(
        {
          title,
          description,
          body,
          thumbnail
        },
        this.props.history
      );
    }
  };

  deletePost = () => {
    this.props.deletePost(this.props.match.params.id, this.props.history);
  };

  render() {
    const postId = this.props.match.params.id;
    const { title, description, editorState, thumbnail } = this.state;
    return (
      <div className="container page">
        <div>
          <h1 className="title mt-5 mb-5">
            {postId ? "EDIT POST" : "NEW POST"}
          </h1>
          <PostForm
            onChange={this.onChange}
            title={title}
            description={description}
          />
          {!thumbnail && <ImageZone onDrop={this.onDrop} />}
          {thumbnail && (
            <div className="m-5 text-center">
              <img src={`/images/${thumbnail}`} className="thumbnail-preview" />
              <div className="m-3 text-center">
                <FaTrashAlt className="trash" onClick={this.deleteImage} />
              </div>
            </div>
          )}
          <TextEditor
            id="text-editor"
            value={editorState}
            onChange={this.onEditorStateChange}
          />
          <div className="m-3 text-center">
            <button onClick={this.onSubmit} className="btn btn-outline-success">
              Submit
            </button>
          </div>
          {this.props.post.comments && (
            <CommentsList comments={this.props.post.comments} id={postId} />
          )}
        </div>
        {postId && <Delete deleteItem={this.deletePost} name={"post"} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { createPost, getPost, editPost, deletePost, deleteComment }
)(EditPostPage);
