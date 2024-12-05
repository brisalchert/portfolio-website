import './Header.css';

// eslint-disable-next-line react/prop-types
export default function Header({ onLanguagesClick, onProjectsClick }) {
  return (
    <nav className="nav-header">
      <p>Brian Salchert</p>
      <ul>
        <li><a onClick={onLanguagesClick}>Languages</a></li>
        <li><a onClick={onProjectsClick}>Projects</a></li>
      </ul>
    </nav>
  );
}
