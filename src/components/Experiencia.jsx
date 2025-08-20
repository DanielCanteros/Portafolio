import React from 'react';

function Experiencia() {
  return (
    <section id="experience" className="container py-5" aria-labelledby="experience-title">
      <h2 id="experience-title" className="fw-bold fs-2 mb-2">Experiencia</h2>
      <div className="row g-3 mt-3">
        <div className="col-md-8">
          <article className="border rounded-4 bg-secondary bg-opacity-10 p-4">
            <h3 className="fw-semibold fs-5">Webmaster – reAcción Paraguay & Quántico (2021–2023)</h3>
            <ul>
              <li>Mantenimiento preventivo y correctivo en <strong>WordPress</strong>.</li>
              <li>Resolución de bugs y <strong>optimización</strong> en HTML, CSS y JavaScript.</li>
              <li>Actualización de plugins, temas y núcleo; <strong>compatibilidad</strong> entre componentes.</li>
              <li>Desarrollo de subpáginas y plantillas; <strong>CSS avanzado</strong> y edición de layouts.</li>
              <li><strong>Backups</strong> de contenido y bases de datos; recuperación ante fallos.</li>
              <li><strong>SEO técnico</strong> básico y mejoras de rendimiento.</li>
              <li>Trabajo interdisciplinario con equipos de datos y comunicación.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
