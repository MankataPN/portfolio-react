import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Features from "./components/features";
import Projects from "./components/projects";
import Resume from "./components/resume";
import ContactMe from "./components/contactMe";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
          <Hero />
          <Features />
          <Projects />
          <Resume />
          <ContactMe />
          <Footer />
          </>
          }  
          />
      </Routes>
    </Router>
  );
}

export default App;