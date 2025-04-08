import PropTypes from 'prop-types';
import StackIcon from "tech-stack-icons";
import Intellij from "../assets/intellij-idea.png"
import Pycharm from "../assets/pycharm.png"
import AndroidStudio from "../assets/android-studio.png"
import VSCode from "../assets/vscode.png"
import Numpy from "../assets/numpy.png"
import Matplotlib from "../assets/matplotlib.png"
import Pandas from "../assets/pandas.png"
import Pytorch from "../assets/pytorch.png"
import ScikitLearn from "../assets/scikit-learn.png"
import "./TechStack.css";
import {forwardRef} from "react";

// eslint-disable-next-line react/display-name
const TechStack = forwardRef ((props, ref) => {
  const iconList = () => {
    const techIconNames = [
      "python", "java", "kotlin", "postgresql", "git",
      "html5", "css3", "js", "reactjs"
    ];
    const techTextNames = [
      "Python", "Java", "Kotlin", "SQL (PostgreSQL)", "Git",
      "HTML", "CSS", "JavaScript", "React"
    ];
    const toolIconNames = [
      Intellij, Pycharm, AndroidStudio, VSCode, Numpy,
      Matplotlib, Pandas, Pytorch, ScikitLearn
    ];
    const toolTextNames = [
      "IntelliJ", "PyCharm", "Android Studio", "VS Code", "Numpy",
      "Matplotlib", "Pandas", "PyTorch", "Scikit-Learn"
    ];

    return (
      <div className="tech-stack" ref={ref}>
        <div className="tech-stack__container">
          <p className="tech-stack__title">My Technology Stack</p>
          <div className="tech-stack__body">
            {techIconNames.map((name, index) => (
              name === "reactjs" ? (
                <div key={index} className="tech-stack__icon-container">
                  <div className="tech-stack__icon-wrapper">
                    <TechStackIcon iconName={name}/>
                  </div>
                  <p className="tech-stack__text">{techTextNames[index]}</p>
                </div>
              ) : (
                <div key={index} className="tech-stack__icon-container">
                  <TechStackIcon iconName={name}/>
                  <p className="tech-stack__text">{techTextNames[index]}</p>
                </div>
              )
            ))}
          </div>
        </div>
        <div className="tech-stack__container">
          <p className="tech-stack__title">Some of the Tools I Use</p>
          <div className="tech-stack__body">
            {toolIconNames.map((name, index) => (
              <div key={index} className="tech-stack__icon-container">
                <ToolStackIcon iconName={name}/>
                <p className="tech-stack__text">{toolTextNames[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return iconList();
});

export default TechStack;

function TechStackIcon({ iconName }) {
  TechStackIcon.propTypes = {
    iconName: PropTypes.string.isRequired
  }

  return (
    <div className="tech-stack__icon">
      <StackIcon name={iconName}/>
    </div>
  );
}

function ToolStackIcon({ iconName }) {
  ToolStackIcon.propTypes = {
    iconName: PropTypes.string.isRequired
  }

  return (
    <div className="tech-stack__icon-tool">
      <img src={iconName} alt="Tool Stack Icon"/>
    </div>
  );
}
