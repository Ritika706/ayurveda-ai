
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '/images/leaf.png';

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="site-title">Tridosha AI</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/chatbot">Chatbot</Link>
      </nav>
    </header>
  );
}
