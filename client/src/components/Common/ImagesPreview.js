import React from "react";
import SingleImagePreview from "./SingleImagePreview";

class ImagesPreview extends React.Component {
  render() {
    const images = this.props.images.map((image, i) => (
      <SingleImagePreview
        key={i}
        image={image}
        deleteImage={this.props.deleteImage}
      />
    ));
    return (
      <div className="row mt-5 mb-5" style={{ postion: "relative" }}>
        {images}
      </div>
    );
  }
}

export default ImagesPreview;
