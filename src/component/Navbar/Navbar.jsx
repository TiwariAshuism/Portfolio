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
          <a href="#about">About</a>{" "}
        </li>
        <li>
          <a href="#skills">Skills</a>{" "}
        </li>{" "}
        <li>
          <a href="#projects">Projects</a>{" "}
        </li>
        </ul>
    </nav>
    </>
   

   
  );
}
