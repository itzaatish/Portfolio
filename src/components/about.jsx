import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image_profile from '../resources/abc.jpg';

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
                  <small>2+ years<br />Frontend Development</small>
                </div>
              </div>

              {/* Education Card */}
              <div className="col-sm-6">
                <div className="border rounded-4 text-center p-4 h-100">
                  <div className="fs-2 mb-2">👥</div>
                  <h5 className="fw-bold mb-1">Education</h5>
                  <small>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</small>
                </div>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis reprehenderit
              et laborum, dolore eum quod voluptate exercitationem nobis, nihil esse debitis
              maxime facere minus sint delectus. Eligendi illum libero cum corrupti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
