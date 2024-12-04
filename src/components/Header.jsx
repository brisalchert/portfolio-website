import './Header.css';

export default function Header() {
  return (
    <nav className="nav-header">
      <p className="name-tag">Brian Salchert</p>
      <ul className="nav-list">
        <li><a href="#languages" className="nav-link">Languages</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
      </ul>
    </nav>
  );
}