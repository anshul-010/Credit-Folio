import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const isAuth = useSelector(state=>state.authReducer).isAuth
  if (isAuth) {
    return children;
  }
  return <Navigate to='/login' redirect={true} />;
};

export default Private;
