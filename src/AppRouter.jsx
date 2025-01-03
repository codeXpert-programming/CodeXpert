import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Componenets/Home";

export default function AppRouter() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
