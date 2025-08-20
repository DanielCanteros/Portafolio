import React from 'react';

function MuestrasCodigo() {
  return (
    <section className="container py-4" aria-labelledby="code-title">
      <h2 id="code-title" className="fw-bold fs-4 mb-2">Muestras de código</h2>
      <ul>
        <li><a href="https://github.com/tu-usuario/repo-igelstore-frontend" target="_blank" rel="noopener noreferrer">repo‑igelstore‑frontend</a></li>
        <li><a href="https://github.com/tu-usuario/repo-igelstore-api" target="_blank" rel="noopener noreferrer">repo‑igelstore‑api</a></li>
        <li><a href="https://github.com/tu-usuario/demo-nextjs-ssr" target="_blank" rel="noopener noreferrer">demo‑nextjs‑ssr</a></li>
      </ul>
      <p className="text-secondary small">Reemplaza los enlaces por tus repos reales. Si lo deseas, puedo ayudarte a subirlos y documentarlos.</p>
    </section>
  );
}

export default MuestrasCodigo;
