import "./Footer.css"
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import resume from "../assets/resume.png";
import upArrow from "../assets/up-arrow.svg";

export default function Footer() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="footer">
      <a className="footer__arrow" onClick={handleClick}>
        <img src={upArrow} className="footer__icon" alt="To Page Top"/>
        <p>To Page Top</p>
      </a>
      <ul className="footer__links">
        <li><a href="https://www.linkedin.com/in/brian-salchert/" target="_blank">
          <img src={linkedin} className="footer__icon" alt="LinkedIn"/>
        </a></li>
        <li><a href="https://github.com/brisalchert" target="_blank">
          <img src={github} className="footer__icon" alt="GitHub"/>
        </a></li>
        <li><a href="/resume.pdf" target="_blank">
          <img src={resume} className="footer__icon" alt="Resume"/>
        </a></li>
      </ul>
      <p className="footer__copyright">&copy; 2024 Brian Salchert. All rights reserved.</p>
    </div>
  );
}
