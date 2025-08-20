import React from 'react';

function Resumen() {
  return (
    <section className="w-100 px-4 py-4" aria-labelledby="resumen-title">
      <div className="container">
        <h2 id="resumen-title" className="fw-bold fs-4 mb-2">Resumen profesional</h2>
        <p>
          Desarrollador frontend con foco en <strong>interfaces modernas, intuitivas y responsivas</strong>. Más de <strong>3 años</strong> trabajando con <strong>HTML5, CSS3 y JavaScript (ES6+)</strong> y <strong>+1 año</strong> con <strong>React.js / React Native</strong> y <strong>Node.js</strong> para integraciones básicas de backend. Experiencia en <strong>Tailwind CSS</strong> y <strong>despliegues en Vercel (frontend) y Render (backend)</strong>.
        </p>
        <blockquote className="fst-italic border-start border-info ps-3 text-info">
          Objetivo: aportar a 5días en la construcción de productos web rápidos, accesibles y bien mantenidos.
        </blockquote>
      </div>
    </section>
  );
}

export default Resumen;
