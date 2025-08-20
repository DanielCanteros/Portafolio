import React from 'react';

const ContactSection = () => {
  return (
    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center mt-4">
      <a href="mailto:danielcanteros1998@gmail.com" className="btn btn-info btn-lg px-4 py-3">
        Enviar Email
      </a>
      <a href="https://www.linkedin.com/in/daniel-canteros-41b761135/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg px-4 py-3">
        LinkedIn
      </a>
      <a href="https://github.com/DanielCanteros" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg px-4 py-3">
        GitHub
      </a>
    </div>
  );
};

export default ContactSection;
