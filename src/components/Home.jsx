import Image_profile from '../resources/abc.jpg';

export default function Home() {
  return (
    <div className="container bg-light " style={{paddingTop: '200px' , paddingBottom: '200px'}}>
      <div className="row align-items-center">
        {/* Left Column: Profile Image */}
        <div className="col-md-6 text-end px-5">
          <img
            src={Image_profile}
            alt="Profile"
            className="rounded-circle img-fluid"
            style={{ width: '300px', height: '300px', objectFit: 'cover' }}
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="col-md-6 text-start px-5">
          <h5 className="text-muted mb-2">Hello, I'm</h5>
          <h1 className="fw-bold mb-1">John Doe</h1>
          <h5 className="text-muted mb-4">Frontend Developer</h5>

          {/* Buttons */}
          <div className="mb-4">
            <button className="btn btn-outline-secondary me-2">Download CV</button>
            <button className="btn btn-dark">Contact Info</button>
          </div>

          {/* Social Links */}
          <div>
            <a href="#" className="btn btn-link text-decoration-none me-2">
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <a href="#" className="btn btn-link text-decoration-none">
              <i className="bi bi-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
