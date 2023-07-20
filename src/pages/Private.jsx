import React from "react";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  let auth = false;
  if (auth) {
    return children;
  }
  return <Navigate to='/login' redirect={true} />;
};

export default Private;
