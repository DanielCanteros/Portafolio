import React from 'react';

// Datos personales dentro del componente
const personal = {
  name: 'Daniel Canteros Giménez',
  role: 'FullStack Developer',
  location: 'Ciudad del Este, Paraguay',
  linkedin: 'https://www.linkedin.com/in/daniel-canteros-41b761135/',
  github: 'https://github.com/DanielCanteros',
};

function Header() {
  return (
    <header className="sticky-top bg-dark border-bottom border-secondary shadow-sm w-100 m-0 p-0" role="banner" style={{ top: 0 }}>
      <div className="container-fluid py-3">
        <div className="row align-items-center">
          {/* Columna izquierda - Textos */}
          <div className="col-12 col-md-8 mb-2 mb-md-0">
            <h1 className="fw-bold fs-4 mb-1 text-light" style={{ wordBreak: 'break-word' }}>{personal.name}</h1>
            <span className="fs-6 text-info d-block mb-1">{personal.role}</span>
            <span className="fs-6 text-secondary d-block">{personal.location}</span>
          </div>
          {/* Columna derecha - Links */}
          <div className="col-12 col-md-4 d-flex flex-row flex-md-row justify-content-md-end justify-content-start gap-3 mt-2 mt-md-0">
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="fw-semibold text-light text-decoration-none">
              LinkedIn
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="fw-semibold text-light text-decoration-none">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
