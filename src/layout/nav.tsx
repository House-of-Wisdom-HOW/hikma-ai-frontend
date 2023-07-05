import { NavLink } from 'react-router-dom';
import logo from '../pics/logo.png';
import './nav.css';

function Nav() {
  return (
    <nav className="nav">

      {/* Logo and website name */}
      <section className="banner">
        <img src={logo} alt="book" />
        <h1 className="title">Hikma AI</h1>
      </section>

      {/* TODO: set active links */}
      <div className="list">
        <NavLink className="link" style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' })} to="/">Home</NavLink>
        <NavLink className="link" style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' })} to="/about">About</NavLink>
        <NavLink className="link" style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' })} to="/add">Add</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
