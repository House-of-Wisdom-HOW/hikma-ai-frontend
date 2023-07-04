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
        <NavLink className="link" style={({ isActive }) => (isActive ? { color: '#FFFFFF' } : { color: '#FFFFFF' })} to="/">Home</NavLink>
        <NavLink className="link" style={({ isActive }) => (isActive ? { color: '#FFFFFF' } : { color: '#FFFFFF' })} to="/">Add</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
