import React from 'react';

// Datos personales dentro del componente
const personal = {
  name: 'Daniel Canteros Giménez',
  role: 'FullStack Developer',
  location: 'Ciudad del Este, Paraguay',
  email: 'danielcanteros1998@gmail.com',
  phone: '+595 992756617',
  linkedin: 'https://www.linkedin.com/in/daniel-canteros-41b761135/',
  github: 'https://github.com/DanielCanteros',
};

function Header() {
  return (
    <header className="sticky-top bg-dark border-bottom border-secondary shadow-sm w-100 m-0 p-0" role="banner" style={{top: 0}}>
      <div className="container-fluid py-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div>
          <h1 className="fw-bold fs-3 mb-0">{personal.name}</h1>
          <span className="fs-6 text-secondary">{personal.role}</span>
        </div>
        <address className="d-flex flex-column flex-md-row gap-2 align-items-md-center mt-2 mt-md-0 text-secondary">
          <span>{personal.location}</span>
          <a href={`mailto:${personal.email}`} className="text-light text-decoration-none">{personal.email}</a>
          <span>{personal.phone}</span>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">LinkedIn</a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">GitHub</a>
        </address>
      </div>
    </header>
  );
}

export default Header;
