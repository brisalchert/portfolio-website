import {useRef, useState} from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import TechStack from "./components/TechStack.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  const [count, setCount] = useState(0)
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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
