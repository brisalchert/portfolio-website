import profileImage from "../assets/react.svg"
import "./About.css"

export default function About() {
  return (
    <div className="about">
      <div className="about__container">
        <img className="about__img" src={profileImage} alt="Profile Image"/>
        <div className="about__text-container">
          <p className="about__name">My name is Brian</p>
          <p className="about__info">
            I&#39;m an undergraduate at Colorado State University Global studying computer science,
            and I love working on cool projects in machine learning and software development!
          </p>
        </div>
      </div>
    </div>
  )
}