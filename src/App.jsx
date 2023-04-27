import React from "react";
import "./App.css";
import Home from "./component/Navbar/home/Home";
import Navbar from "./component/Navbar/Navbar";
import About from "./component/about/About";
function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
