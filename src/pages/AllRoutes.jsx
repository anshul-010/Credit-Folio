import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetail from "./UserDetail";
import { ErrorPage } from "./ErrorPage";
import ReportPage from "./ReportPage";
import { Home } from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { About } from "./About";
import { Blog } from "./Blog";
import { CreditReport } from "./CreditReport";
import { Education } from "./Education";
import { HelpCenter } from "./HelpCenter";
// import  from './'
import Admin from "./Admin";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/home' element={<><UserDetail /> </> } />
      <Route path='/login' element={<Login />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/creditreport' element={<CreditReport />} />
      <Route path='/education' element={<Education />} />
      <Route path='helpcenter' element={<HelpCenter />} />
      {/* ----------------------------------------------------- */}
      <Route path='/credit-report/' element={<><ReportPage /></> } />
      <Route path='/credit-report/:tab' element={<><ReportPage /> </>} />
      <Route path='/admin' element={<><Admin /> </>} />
      <Route path='/admin/:tab' element={<><Admin /> </>} />
      <Route path='/offers' element={<UserDetail />} />
      <Route path='/alerts' element={<UserDetail />} />
      <Route path='/score-simulator' element={<UserDetail />} />
      <Route path='/credit-education' element={<UserDetail />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default AllRoutes;
