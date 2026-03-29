import React from 'react';

export default function Contact() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Get In Touch</h2>

      <form className="shadow p-4 rounded bg-light">

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="Enter your full name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" placeholder="example@mail.com" />
        </div>

        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input type="text" className="form-control" placeholder="Write a subject" />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="5" placeholder="Write your message here..." />
        </div>

        <button className="btn btn-dark w-100">Send Message</button>
      </form>
    </div>
  );
}