import React from 'react';

function Projects({ projects }) {
  return (
    <section id="projects" className="container py-5" aria-labelledby="projects-title">
      <h2 id="projects-title" className="fw-bold fs-2 mb-2">Proyectos destacados</h2>
      <div className="row g-4 mt-3">
        {projects.map((p) => (
          <div key={p.title} className="col-md-6 col-lg-4">
            <article className="border rounded-4 bg-secondary bg-opacity-10 p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="fw-semibold fs-5 mb-0">{p.title}</h3>
                  <span className="badge bg-dark text-light">{p.year}</span>
                </div>
                <p className="mt-2 small text-light">{p.description}</p>
              </div>
              <div className="mt-2 mb-2">
                {p.tech.map((t) => (
                  <span key={t} className="badge bg-dark bg-opacity-75 me-1 mb-1">{t}</span>
                ))}
              </div>
              <a href={p.url} target="_blank" rel="noreferrer" className="text-info text-decoration-none mt-2">
                Visitar ↗
              </a>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
