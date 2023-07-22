import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetail from "./UserDetail";
import { ErrorPage } from "./ErrorPage";
import ReportPage from "./ReportPage";
import { Home } from "../components/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<UserDetail />} />
      <Route path='/credit-report/' element={<ReportPage />} />
      <Route path='/credit-report/:tab' element={<ReportPage />} />
      <Route path='/offers' element={<UserDetail />} />
      <Route path='/alerts' element={<UserDetail />} />
      <Route path='/score-simulator' element={<UserDetail />} />
      <Route path='/credit-education' element={<UserDetail />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default AllRoutes;
