import "./Projects.css"
import {forwardRef, useState} from "react";
import React from "react";
import PropTypes from "prop-types";
import clothingStore from "../assets/mock-store.png"
import mazeSolver from "../assets/maze-solver.png"
import audioCNN from "../assets/audio-cnn.png"
import lstm from "../assets/lstm.png"
import sudoku from "../assets/sudoku.png"
import arrow from "../assets/arrow.png"

// eslint-disable-next-line react/display-name
const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      projectTitle: "LSTM Text Classifier",
      projectTools: "Python, PyTorch, Machine Learning, NLP, Pandas, Seaborn, Matplotlib, PyCharm",
      projectDescription: "A long short-term memory recurrent neural network for performing binary classification " +
        "of text as either AI-generated or human-written.\n\nThe program preprocesses text using NLP techniques " +
        "such as tokenization, stemming, and stop-word removal. The model implements L1 and L2 normalization " +
        "and uses cross-validation to ensure a good tradeoff between bias and variance. The model achieves " +
        "a testing ROC AUC score of over 95%.",
      projectImage: lstm,
      projectURL: "https://github.com/brisalchert/ai-text-classification"
    },
    {
      projectTitle: "Sudoku Desktop Application",
      projectTools: "Java, JavaFX, MVC Design Pattern, IntelliJ",
      projectDescription: "A Java desktop application for playing Sudoku. The program uses a backtracking algorithm " +
        "to generate randomized game boards with only one valid solution.\n\nThe algorithm attempts to fill the " +
        "board randomly by choosing valid candidates for random tiles and then eliminating candidates in other " +
        "tiles that are made invalid by that choice.\n\nThe user interface is built in JavaFX and implements the " +
        "Model-View-Controller design pattern.",
      projectImage: sudoku,
      projectURL: "https://github.com/brisalchert/SudokuDesktopApplication"
    },
    {
      projectTitle: "Python Maze Solver",
      projectTools: "Python, PyQt6, PyCharm",
      projectDescription: "A python application that can randomly generate mazes of various sizes and then solve " +
        "them using several traversal algorithms.\n\nThe application includes a user interface created using PyQt6 " +
        "with a slider for a 'slow factor' that slows down the generation and traversal algorithms to allow the user " +
        "to watch them work.",
      projectImage: mazeSolver,
      projectURL: "https://github.com/brisalchert/maze-solver"
    },
    {
      projectTitle: "Battlefield Audio Classifier",
      projectTools: "Python, Tensorflow/Keras, Machine Learning, Matplotlib, PyCharm",
      projectDescription: "A convolutional neural network for classifying sound samples as one of five different " +
        "types of audio from a battlefield setting. This project uses Tensorflow for machine learning and " +
        "achieved a validation accuracy of over 90% even with a limited dataset.",
      projectImage: audioCNN,
      projectURL: "https://github.com/brisalchert/BattlefieldAudioClassification"
    },
    {
      projectTitle: "Mock Clothing Store",
      projectTools: "Java, Data Structures & Algorithms, IntelliJ",
      projectDescription: "A Java application for running a mock clothing store from the terminal. The " +
        "application uses a HashMap for efficiently storing tens of thousands of items with constant retrieval " +
        "time by ID.\n\nIt also allows users to search for items by their characteristics and sort results by " +
        "several criteria. The program implements spelling correction and word suggestion for many of the " +
        "available input actions.",
      projectImage: clothingStore,
      projectURL: "https://github.com/brisalchert/Data-Structures-Project"
    }
  ];

  const [carouselLeft, setCarouselLeft] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [leftEnabled, setLeftEnabled] = useState(false);
  const [rightEnabled, setRightEnabled] = useState(true);

  const onLeftArrowClicked = () => {
    setCarouselLeft(carouselLeft + 800);
    setCarouselIndex(carouselIndex - 1);

    // Update happens after method completes
    if (carouselIndex === 1) {
      setLeftEnabled(false);
    }

    if (!rightEnabled) {
      setRightEnabled(true);
    }
  };

  const onRightArrowClicked = () => {
    setCarouselLeft(carouselLeft - 800);
    setCarouselIndex(carouselIndex + 1);

    // Update happens after method completes
    if (carouselIndex === projects.length - 2) {
      setRightEnabled(false);
    }

    if (!leftEnabled) {
      setLeftEnabled(true);
    }
  };

  return (
    <div className="projects" ref={ref}>
      <p className="projects-title">Here are some projects I&#39;ve worked on</p>
      <div className="projects__container">
        <Arrow left={true} onClick={onLeftArrowClicked} enabled={leftEnabled}/>
        <div className="projects__carousel">
          <CarouselTrack projects={projects} left={carouselLeft}/>
        </div>
        <Arrow left={false} onClick={onRightArrowClicked} enabled={rightEnabled}/>
      </div>
    </div>
  )
});

export default Projects;

function CarouselTrack({ projects, left }) {
  CarouselTrack.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object),
    left: PropTypes.number
  }

  const style = {
    transform: `translateX(${left}px)`,
  }

  return (
    <div className="projects__carousel-track" style={style}>
      {projects.map((project, index) => (
        <div className="projects__carousel-slide" key={index}>
          <a href={project["projectURL"]} target="_blank">
            <div className="projects__item">
              <img src={project["projectImage"]} className="projects__image" alt={project["projectTitle"]}/>
              <ProjectCard title={project["projectTitle"]} tools={project["projectTools"]} description={project["projectDescription"]}/>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

function ProjectCard({title, tools, description}) {
  ProjectCard.propTypes = {
    title: PropTypes.string,
    tools: PropTypes.string,
    description: PropTypes.string
  }

  return (
    <div className="projects__card">
      <div className="projects__info">
        <p className="projects__name">{title}</p>
        <p className="projects__tools">{tools}</p>
        <p className="projects__description">
          {description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
        </p>
      </div>
    </div>
  )
}

function Arrow({onClick, left, enabled}) {
  Arrow.propTypes = {
    onClick: PropTypes.func,
    left: PropTypes.bool,
    enabled: PropTypes.bool
  };

  if (left) {
    return (
      <img className={`projects__arrow-left ${enabled ? "enabled" : "disabled"}`} src={arrow} alt="Left Arrow" onClick={onClick}/>
    );
  } else {
    return (
      <img className={`projects__arrow-right ${enabled ? "enabled" : "disabled"}`} src={arrow} alt="Right Arrow" onClick={onClick}/>
    );
  }
}
