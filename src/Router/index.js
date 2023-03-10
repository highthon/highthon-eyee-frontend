import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import CategoryPage from "../pages/Category";
import ChallengePage from "../pages/ChallengePage";
import CommonBuyPage from "../pages/CommonBuyPage";
import LoginPage from "../pages/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/category" element={<CategoryPage/>} />
        <Route path="/challenge" element={<ChallengePage/>} />
        <Route path="/commonbuy" element={<CommonBuyPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
