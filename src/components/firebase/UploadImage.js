import React from "react";
import { saveAs } from "file-saver";

import { BiImageAdd } from "react-icons/bi";
const UploadImage = ({ setAddProductData, handleUpload }) => {
  const [images, setImages] = React.useState([]);
  const [progress, setProgress] = React.useState(0);

  const handleChange = (e) => {
    setImages([]);
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
    setProgress(0);
    handleUpload(e);
  };

  return (
    <>
      <label>Upload Image</label>
      <div className="w-full mt-1">
        <label
          htmlFor="image"
          type="file"
          className="flex items-center justify-center px-4 py-2 border border-[#edd5da] rounded-md shadow-sm"
        >
          <BiImageAdd className="text-xl" />
          &nbsp;
          {images.length ? (
            <span className="text-sm text-gray-500 ml-2">{images.length} image selected</span>
          ) : (
            "Upload Image"
          )}
          <button
            type="btn"
            onClick={progress !== 100 ? handleUpload : null}
            className={
              images.length
                ? "ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#f50057] hover:bg-[#f50057] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f50057]"
                : "hidden"
            }
          >
            {progress === 0 ? "Upload" : progress === 100 ? "Done" : progress}
          </button>
        </label>
        <input multiple onChange={handleChange} style={{ display: "none" }} name="image" id="image" type="file" />
      </div>
    </>
  );
};

export default UploadImage;
