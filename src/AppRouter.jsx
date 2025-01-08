import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Componenets/Home";
import About from "./Componenets/About";
import Enroll from "./Componenets/Enroll";
import Courses from "./Componenets/Courses";
import Contact from "./Componenets/Contact";

export default function AppRouter() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/enroll" element={<Enroll />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
}
