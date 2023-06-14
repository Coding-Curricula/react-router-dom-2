import React from "react";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <Layout>
      <Navigation />
      <Homepage />
      <AboutUs />
      <ContactUs />
    </Layout>
  );
}
