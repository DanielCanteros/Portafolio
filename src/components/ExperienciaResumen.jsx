import React from 'react';

function ExperienciaResumen() {
  return (
    <section className="container py-4" aria-labelledby="expres-title">
      <h2 id="expres-title" className="fw-bold fs-4 mb-2">Experiencia (resumen)</h2>
      <ul>
        <li><strong>+1 año</strong> usando <strong>React.js</strong> y <strong>React Native</strong> para interfaces y flujos móviles/web.</li>
        <li><strong>+3 años</strong> con <strong>HTML5, CSS3 y JavaScript (ES6+)</strong>.</li>
        <li><strong>+1 año</strong> con <strong>Node.js (Express)</strong> para APIs y <strong>MongoDB</strong> (Mongoose) para persistencia.</li>
        <li><strong>+1 año</strong> desplegando en <strong>Vercel</strong> (frontend) y <strong>Render</strong> (backend).</li>
      </ul>
    </section>
  );
}

export default ExperienciaResumen;
