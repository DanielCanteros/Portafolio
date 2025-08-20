import React from 'react';

function ComoTrabajo() {
  return (
    <section className="container py-4" aria-labelledby="work-title">
      <h2 id="work-title" className="fw-bold fs-4 mb-2">Cómo trabajo</h2>
      <ul>
        <li><strong>Mobile‑first</strong> y accesibilidad (semántica, contraste, etiquetas, teclado).</li>
        <li>Componentización, <strong>estado predecible</strong> y comunicación clara entre front y back.</li>
        <li>Pull requests pequeños, descripciones claras y comunicación asíncrona.</li>
        <li>Documentación mínima por feature (README y comentarios útiles).</li>
      </ul>
    </section>
  );
}

export default ComoTrabajo;
