import React from "react";
import FormInputField from "../Common/FormInputField";

const PostForm = ({ onChange, title, description }) => (
  <div>
    <FormInputField
      label="Title"
      name="title"
      placeholder="The title of your post"
      onChange={onChange}
      value={title}
    />
    <FormInputField
      label="Description"
      name="description"
      placeholder="The description of your post"
      onChange={onChange}
      value={description}
    />
  </div>
);

export default PostForm;
