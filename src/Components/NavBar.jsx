import React from "react";
import "./NavBar.css"
import {  Link } from "react-router-dom";
 const NavBar=()=> {
    return (
      <div className="  NavBar">
       <nav><button><Link to="/">Home</Link></button>
      <button><Link to="/Order">Order</Link></button>
      <button><Link to="/Menu">Menu</Link></button>
      </nav>
      </div>
    );
  }
  export default NavBar;