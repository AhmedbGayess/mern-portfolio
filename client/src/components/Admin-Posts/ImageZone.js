import React from "react";
import Dropzone from "react-dropzone";

const ImageZone = ({ onDrop }) => (
  <Dropzone
    onDrop={onDrop}
    className="dropzone"
    multiple={false}
    maxSize={3000000}
    accept="image/*"
  >
    {({
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
      isDragReject,
      rejectedFiles
    }) => {
      const isFileTooLarge =
        rejectedFiles.length > 0 && rejectedFiles[0].size > 3000000;

      return (
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          {isDragAccept && (
            <p>Drag and drop the image to define it as thumbnail</p>
          )}
          {isDragReject && <p>Only images (1mo or less) are accepted</p>}
          {!isDragActive && (
            <p>Drag and drop an image here to define it as thumbnail</p>
          )}
          {isFileTooLarge && (
            <p className="text-danger">File too big (1mo max)</p>
          )}
        </div>
      );
    }}
  </Dropzone>
);

export default ImageZone;
