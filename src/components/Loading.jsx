import React from "react";

const Loading = () => {
  return (
    <>
    <div className="d-flex spin align-items-center  justify-content-center">
      <div
        className="spinner-border"
        style={{ height: "4rem", width: "4rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
      <div >
      <p className="text-center loading" >Just a moment, the pixels are aligning...</p>
    </div>
    </>
  );
};

export default Loading;
