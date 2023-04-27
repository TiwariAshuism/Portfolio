import React from "react";
import "./App.css";
import Home from "./component/Navbar/home/Home";
import Navbar from "./component/Navbar/Navbar";
import About from "./component/about/About";
import Skills from "./component/skills/Skills";
import Qualification from "./component/qualification/Qualification";
import Projects from "./component/Projects/Projects";
import Footer from "./component/footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <About />
        <Skills/>
        <Qualification/>
        <Projects/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
