import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image_profile from '../resources/img6.jpg';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-muted">Get To Know More</p>
          <h2 className="fw-bold">About Me</h2>
        </div>

        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src={Image_profile} // replace with your image
              alt="Profile"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '80%' }}
            />
          </div>

          {/* Info Cards + Description */}
          <div className="col-md-7">
            <div className="row g-3 mb-4">
              {/* Experience Card */}
              <div className="col-sm-6">
                <div className="border rounded-4 text-center p-4 h-100">
                  <div className="fs-2 mb-2">🏅</div>
                  <h5 className="fw-bold mb-1">Experience</h5>
                  <small><br />Full-Stack-Development</small>
                </div>
              </div>

              {/* Education Card */}
              <div className="col-sm-6">
                <div className="border rounded-4 text-center p-4 h-100">
                  <div className="fs-2 mb-2">👥</div>
                  <h5 className="fw-bold mb-1">Education</h5>
                  <small>B-Tech 4th year - NIT Agartala<br />Higher Secondary CBSE</small>
                </div>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-muted">
              Hey! I’m Aatish Kumar, a B.Tech student in Electronics and Communication Engineering at NIT Agartala. I enjoy solving real-world problems through code—whether it’s building full-stack web applications or optimizing C++ algorithms to handle data efficiently.
            <p/>
            <p className="text-muted"></p>
              I’ve developed strong problem-solving skills in Data Structures and Algorithms. I’m also well-versed in both frontend  and backend development, and I love building clean, responsive, and scalable web apps.
            <p/>
            <p className="text-muted"></p>
              Beyond software, I’m deeply interested in core electronics like VLSI, optical fiber communication, and network systems. Currently preparing for placements, I’m focused on combining my knowledge in software and electronics to create impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
