import React from "react";
import Order from "./Order";
import Menu from "./Menu";
import Home from "./Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Header from "./Header";

const AppRouter = () => {
  return (
    <BrowserRouter >
      <Header />    
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Order" element={<Order />} />
        <Route exact path="/Menu" element={<Menu />} />
      </Routes>   
      <Footer />
    </BrowserRouter>
  );
};
export default AppRouter;
