import React from "react";
import "./App.css";
import NavbarComponent from "./components/nav/navbar";
import About from "./components/intro/about";
import Courses from "./components/courses";
import Conferences from "./components/conferences";
import Publications from "./components/publications";
import AcademicResponsibities from "./components/academic_responsibilties";
import Footer from "./components/footer";
import AwardsRecognition from "./components/awards_recognition";
// import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <About />
      <Courses />
      <Conferences  />
      <Publications />
      <AcademicResponsibities />
      <AwardsRecognition />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}

export default App;
