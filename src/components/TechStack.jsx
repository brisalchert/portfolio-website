import StackIcon from "tech-stack-icons";
import "./TechStack.css"

export default function TechStack() {
  return (
    <div className="tech-stack">
      <StackIcon className="tech-stack__icon" name="python" />
      <StackIcon className="tech-stack__icon" name="java" />
      <StackIcon className="tech-stack__icon" name="postgresql" />
      <StackIcon className="tech-stack__icon" name="git" />
      <StackIcon className="tech-stack__icon" name="html5" />
      <StackIcon className="tech-stack__icon" name="css3" />
      <StackIcon className="tech-stack__icon" name="js" />
      <div className="tech-stack__icon-wrapper">
        <StackIcon className="tech-stack__icon" name="reactjs" />
      </div>
    </div>
  )
}