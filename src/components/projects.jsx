import React from 'react';
import img2 from '../resources/project2.webp'; 
import img1 from '../resources/project1.jpg'
const projects = [
  {
    title: 'Real Estate App',
    description: 'A Real Estate App that helps you find your dream home',
    image: img1, 
    github: 'https://github.com/itzaatish/Real_estate',
    demo: '#'
  },
  {
    title: 'Task Manager',
    description: 'A Task Manager App that helps you manage your tasks',
    image: img2,
    github: 'https://github.com/itzaatish/Task-Manager',
    demo: '#'
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
              <img src={project.image} alt={project.title} className="card-img-top rounded-4 mb-3" />
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
