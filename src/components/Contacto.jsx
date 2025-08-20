import React from 'react';

function Contacto({ personal }) {
  return (
    <section id="contact" className="container py-5" aria-labelledby="contact-title">
      <h2 id="contact-title" className="fw-bold fs-2 mb-2">¿Construimos algo juntos?</h2>
      <div className="border rounded-4 bg-secondary bg-opacity-10 p-4 d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div>
          <p className="text-secondary">Disponible remoto (GMT‑3). Listo para prueba técnica.</p>
        </div>
        <div className="mt-3 mt-md-0 d-flex gap-2">
          <a href={`mailto:${personal.email}`} className="btn btn-info text-dark fw-semibold">Contactar</a>
          <a href={personal.github} className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={personal.linkedin} className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={personal.cv} className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">Descargar CV</a>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
