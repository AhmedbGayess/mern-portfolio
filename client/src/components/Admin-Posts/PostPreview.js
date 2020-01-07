import React from "react";
import ContentEditable from "react-contenteditable";

class PostPreview extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();

    this.state = {
      html: `<div class='text-justify post'><h1 class='text-center'>${
        this.props.title
      }</h1><h5 class='text-center'>${this.props.description}</h5><p>${
        this.props.body
      }</p><div>${this.props.images}</div></div>`
    };
  }

  handleChange = (evt) => {
    this.setState({ html: evt.target.value });
  };

  submit = () => {
    this.props.submit(this.state.html);
  };

  render = () => {
    return (
      <div className="container page">
        <button
          className="btn btn-outline-success mb-5"
          onClick={this.props.previous}
        >
          &larr; Back
        </button>
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.state.html}
          disabled={false}
          onChange={this.handleChange}
        />
        <div className="text-center mt-5">
          <button className="btn btn-outline-success" onClick={this.submit}>
            Submit
          </button>
        </div>
      </div>
    );
  };
}

export default PostPreview;
