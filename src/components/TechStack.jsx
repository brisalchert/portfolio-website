import PropTypes from 'prop-types';
import StackIcon from "tech-stack-icons";
import "./TechStack.css";

export default function TechStack() {
  const iconList = () => {
    const iconNames = [
      "python", "java", "postgresql", "git",
      "html5", "css3", "js", "reactjs"
    ];
    const textNames = [
      "Python", "Java", "SQL\n(PostgreSQL)", "Git",
      "HTML", "CSS", "JavaScript", "React"
    ];

    return (
      <div className="tech-stack">
        {iconNames.map((name, index) => (
          index === 7 ? (
            <div key={index} className="tech-stack__icon-container">
              <div className="tech-stack__icon-wrapper">
                <TechStackIcon iconName={name}/>
              </div>
              <p className="tech-stack__text">{textNames[index]}</p>
            </div>
          ) : (
            <div key={index} className="tech-stack__icon-container">
              <TechStackIcon key={index} iconName={name}/>
              <p className="tech-stack__text">{textNames[index]}</p>
            </div>
          )
        ))}
      </div>
    )
  }

  return iconList();
}

function TechStackIcon({ iconName }) {
  TechStackIcon.propTypes = {
    iconName: PropTypes.string.isRequired,
  }

  return (
    <div className="tech-stack__icon">
      <StackIcon name={iconName} />
    </div>
  );
}
