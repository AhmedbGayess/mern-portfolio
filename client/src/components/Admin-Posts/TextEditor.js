import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/upload");
    xhr.setRequestHeader("Authorization", `Bearer ${localStorage.token}`);
    const data = new FormData();
    data.append("images", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve({ data: { link: `/images/${response.file}` } });
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

class TextEditor extends React.Component {
  render() {
    return (
      <div className="m-auto">
        <Editor
          editorState={this.props.value}
          onEditorStateChange={this.props.onChange}
          toolbar={{
            image: {
              uploadCallback: uploadImageCallBack,
              alt: { present: true, mandatory: true },
              previewImage: true
            }
          }}
          editorStyle={{
            border: "1px solid #f1f1f1",
            minHeight: "300px",
            padding: "5px"
          }}
        />
      </div>
    );
  }
}

export default TextEditor;
