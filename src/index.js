import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
);
