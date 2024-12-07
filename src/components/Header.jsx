import './Header.css';

// eslint-disable-next-line react/prop-types
export default function Header({ onLanguagesClick, onProjectsClick }) {
  return (
    <div className="header">
      <nav className="nav-header">
        <p>Brian Salchert</p>
        <ul>
          <li><a onClick={onLanguagesClick}>Languages & Tools</a></li>
          <li><a onClick={onProjectsClick}>Projects</a></li>
        </ul>
      </nav>
    </div>
  );
}
