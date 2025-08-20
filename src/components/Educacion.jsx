import React from 'react';

function Educacion() {
  return (
    <section className="container py-4" aria-labelledby="edu-title">
      <h2 id="edu-title" className="fw-bold fs-4 mb-2">Educación y certificaciones (opcional)</h2>
      <ul>
        <li>Cursos de React/Next.js, JavaScript moderno y Node.js (platzi/udemy/otros).</li>
        <li>Inglés <strong>B2</strong>.</li>
      </ul>
    </section>
  );
}

export default Educacion;
