import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing-page/home/HomePage";
import SignUp from "./landing-page/signup/SignUp";
import SupportPage from "./landing-page/support/SupportPage";
import Pricing from "./landing-page/pricing/PricingPage";
import AboutPage from "./landing-page/about/AboutPage";
import Navbar from "./landing-page/Navbar";
import Footer from "./landing-page/Footer";
import NotFound from "./landing-page/NotFound";
import Login from "./landing-page/signup/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);