import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4">
      <div className="container-fluid">

        <Link className={`navbar-brand ${path === '/' ? 'active' : ''}`} to="/">Home</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarRight"
          aria-controls="navbarRight"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarRight">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${path === '/about' ? 'active border-bottom border-3 border-primary' : ''}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${path === '/experince' ? 'active border-bottom border-3 border-primary' : ''}`} to="/experince">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${path === '/projects' ? 'active border-bottom border-3 border-primary' : ''}`} to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${path === '/contact' ? 'active border-bottom border-3 border-primary' : ''}`} to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
