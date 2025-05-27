import React from 'react';
import emailjs from 'emailjs-com';


const serviceID = process.env.Portfolio_emailjs_SERVICE_ID;
const templateID = process.env.Portfolio_emailjs_TEMPLATE_ID;
const userID = process.env.Portfolio_emailjs_USER_ID;
// Ensure these environment variables are set in your .env file or hosting platform

function sendemails(message){
    message.preventDefault();
    console.log(message.target); 
  
    emailjs.sendForm(serviceID,templateID,message.target,userID)
    .then((result) => {
        console.log("message sent")
    },(error) => {
        console.log(error.text);
    });
}

export default function Contact() {
  return (
    <div className="container text-center my-5 py-5">
      {/* Title Section */}
      <div className="mb-4">
        <small className="text-muted">Get in Touch</small>
        <h2 className="fw-bold">Contact Me</h2>
      </div>

      {/* Contact Options */}
      <div className="d-flex justify-content-center">
        <div className="border rounded-pill px-4 py-2 d-flex gap-4 align-items-center shadow-sm">
          {/* Email */}
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-envelope-fill"></i>
             <a href="mailto:byjsr71@gmail.com" className="text-dark">byjsr71@gmail.com</a>
          </div>

          {/* Divider */}
          <div className="vr"></div>

          {/* LinkedIn */}
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/aatish-kumar-156528221"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Message Form */}
      <form onSubmit={sendemails} className="mt-5 col-md-6 mx-auto">
        <div className="mb-3 text-start">
          <label htmlFor="message" className="form-label fw-semibold">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Type your message here..."></textarea>
        </div>
        <button type="submit" className="btn btn-dark px-4">Send Message</button>
      </form>
    </div>
  );
}
