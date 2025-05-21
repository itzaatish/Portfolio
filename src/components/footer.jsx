import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container text-center text-md-left">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Aatish Kumar</h5>
            <p>Full-Stack Developer | Problem Solver | Passionate about building elegant and functional web apps.</p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/projects" className="text-white text-decoration-none">Projects</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Contact</h5>
            <p>Email: <a href="mailto:byjsr71@gmail.com" className="text-white">byjsr71@gmail.com</a></p>
            <div>
              <a href="https://github.com/itzaatish" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-github fs-4"></i>
              </a>
              <a href="https://www.linkedin.com/in/aatish-kumar-156528221" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-twitter fs-4"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <small>&copy; {new Date().getFullYear()} AK . All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
