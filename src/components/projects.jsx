import React from 'react';
import Image from '../resources/abc.jpg'; 
const projects = [
  {
    title: 'Project One',
    description: 'Better Communication with Each Other',
    image: '../resources/abc.jpg', 
    github: 'https://github.com/yourname/project1',
    demo: 'https://demo-link.com/project1'
  },
  {
    title: 'Project Two',
    description: 'Stop Scrolling! I have something to tell you',
    image: '../resources/abc.jpg',
    github: 'https://github.com/yourname/project2',
    demo: 'https://demo-link.com/project2'
  },
];


export default function Projects() {
  return (
    <div className="container my-5 py-5 text-center">
      <small className="text-muted">Browse My Recent</small>
      <h2 className="fw-bold mb-4">Projects</h2>

      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow rounded-4 p-3">
              <img src={Image} alt={project.title} className="card-img-top rounded-4 mb-3" />
              <h5 className="fw-bold">{project.title}</h5>
              <p className="text-muted">{project.description}</p>
              <div className="d-flex justify-content-center gap-3 mt-auto">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline-dark rounded-pill">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-outline-dark rounded-pill">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
