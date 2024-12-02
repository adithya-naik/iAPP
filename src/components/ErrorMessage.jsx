import React from "react";
import { Link } from "react-router-dom";
const ErrorMessage = () => {
  return (
    <center className="error-msg">
      <div>
        <h1 className="no-posts"> NO POSTS AVAILABLE !!</h1>
        <p className="suggest">Start Creating the posts</p>
      </div>
    </center>
  );
};

export default ErrorMessage;
