import './Header.css';
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import resume from "../assets/resume.png"
import PropTypes from "prop-types";

export default function Header({ onLanguagesClick, onProjectsClick }) {
  Header.propTypes = {
    onLanguagesClick: PropTypes.func,
    onProjectsClick: PropTypes.func
  }

  return (
    <div className="header">
      <nav className="header__nav">
        <p>Brian Salchert</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/brian-salchert/" target="_blank">
            <img src={linkedin} className="header__icon" alt="LinkedIn"/>
          </a></li>
          <li><a href="https://github.com/brisalchert" target="_blank">
            <img src={github} className="header__icon" alt="GitHub"/>
          </a></li>
          <li><a href="/resume.pdf" target="_blank">
            <img src={resume} className="header__icon" alt="Resume"/>
          </a></li>
          <li><a onClick={onLanguagesClick}>Languages & Tools</a></li>
          <li><a onClick={onProjectsClick}>Projects</a></li>
        </ul>
      </nav>
    </div>
  );
}
