import React from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";

class SingleImagePreview extends React.Component {
  deleteImage = () => {
    axios
      .delete(`/upload/${this.props.image}`)
      .then(() => this.props.deleteImage(this.props.image))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="col m-auto text-center">
        <div>
          <img
            src={`/images/${this.props.image}`}
            className="thumbnail-preview mb-2"
          />
        </div>
        <FaTrashAlt className="trash" onClick={this.deleteImage} />
      </div>
    );
  }
}

export default SingleImagePreview;
