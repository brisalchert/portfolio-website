import "./Projects.css"
import {forwardRef} from "react";
import PropTypes from "prop-types";
import clothingStore from "../assets/mock-store.png"
import mazeSolver from "../assets/maze-solver.png"
import audioCNN from "../assets/audio-cnn.png"
import lstm from "../assets/lstm.png"
import sudoku from "../assets/sudoku.png"

// eslint-disable-next-line react/display-name
const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      projectTitle: "LSTM Text Classifier",
      projectDescription: "A long short-term memory recurrent neural network for classifying text as either" +
        "AI-generated or human-written.",
      projectImage: lstm,
      projectURL: "https://github.com/brisalchert/ai-text-classification"
    },
    {
      projectTitle: "Sudoku Desktop Application",
      projectDescription: "A Java desktop application for playing Sudoku. Uses a backtracking algorithm to generate " +
        "randomized game boards with only one valid solution.",
      projectImage: sudoku,
      projectURL: "https://github.com/brisalchert/SudokuDesktopApplication"
    },
    {
      projectTitle: "Python Maze Solver",
      projectDescription: "A python application that can randomly generate mazes of various sizes and then solve " +
        "them using several traversal algorithms. The application includes a user interface created using PyQt6 " +
        "and includes a 'slow factor' that slows down the generation and traversal algorithms to allow the user " +
        "to watch them work.",
      projectImage: mazeSolver,
      projectURL: "https://github.com/brisalchert/maze-solver"
    },
    {
      projectTitle: "Battlefield Audio Classifier",
      projectDescription: "A convolutional neural network for classifying sound samples as one of five different " +
        "types of audio from a battlefield setting. This project uses Tensorflow for machine learning.",
      projectImage: audioCNN,
      projectURL: "https://github.com/brisalchert/BattlefieldAudioClassification"
    },
    {
      projectTitle: "Mock Clothing Store",
      projectDescription: "A Java application for running a mock clothing store from the terminal. The " +
        "application uses a HashMap for efficiently storing tens of thousands of items with constant retrieval " +
        "time by ID. It also allows users to search for items by their characteristics and sort results by " +
        "several criteria. The program implements spelling correction and word suggestion for many of the " +
        "available input actions.",
      projectImage: clothingStore,
      projectURL: "https://github.com/brisalchert/Data-Structures-Project"
    }
  ]

  return (
    <div className="projects" ref={ref}>
      <p className="projects-title">Here are some of my projects</p>
      <div className="projects__container">
        {projects.map((project, index) => (
          <div className="projects__anchor-wrapper" key={index}>
            <a href={project["projectURL"]} target="_blank">
              <div className="projects__item">
                <img src={project["projectImage"]} className="projects__image" alt={project["projectTitle"]}/>
                <ProjectCard title={project["projectTitle"]} description={project["projectDescription"]}/>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
});

export default Projects;

function ProjectCard({title, description}) {
  ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
  }

  return (
    <div className="projects__card">
      <div className="projects__info">
        <p className="projects__name">{title}</p>
        <p className="projects__description">{description}</p>
      </div>
    </div>
  )
}
