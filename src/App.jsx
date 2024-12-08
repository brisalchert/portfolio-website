import {useRef, useState} from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import TechStack from "./components/TechStack.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const languagesRef = useRef(null);
  const projectsRef = useRef(null);
  const onLanguagesClick = () => {
    languagesRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const onProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Header onLanguagesClick={onLanguagesClick} onProjectsClick={onProjectsClick} />
      <About />
      <TechStack ref={languagesRef}/>
      <Projects ref={projectsRef}/>
      <Footer />
    </>
  )
}

export default App
