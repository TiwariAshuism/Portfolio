import React from "react";

import "./Navbar.css";
export default function Navbar() {
  return (
    <>
     <nav>
     <input type="checkbox" id="check"/>
     <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
     </label>
        <label className="logo">ASHU</label>
        <ul>
        <li>
          <a href="#home" className="active">Home</a>
        </li>
        <li>
          <a href="#home">About</a>{" "}
        </li>
        <li>
          <a href="#home">Work</a>{" "}
        </li>{" "}
        <li>
          <a href="#home">Contact</a>{" "}
        </li>
        </ul>
    </nav>
    </>
   

   
  );
}
