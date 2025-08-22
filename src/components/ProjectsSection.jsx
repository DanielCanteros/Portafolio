import React, { useState, useEffect } from 'react';

const projects = [
  {
    title: 'IgelStore',
    year: '2025',
    role: 'FullStack Developer',
    stack: 'React.js, Tailwind CSS, Vercel; backend en Node.js/Render y MongoDB',
    description: 'Catálogo de perfumes con diseño web, maquetación responsive, componentes reutilizables (cards, modales, formularios), filtros, consumo de API propia.',
    url: 'https://igelstore.com'
  },
  {
    title: 'Quántico',
    year: '2023',
    role: 'Desarrollador e Integrador Web',
    stack: 'WordPress + HTML/CSS/JS',
    description: 'Landing para campaña “Una mirada a la situación de las escuelas paraguayas”; refactor de estilos, navegación y accesibilidad; identidad visual consistente.',
    url: 'https://quantico.reaccion.org.py/inversion-educacionpy/'
  },
  {
    title: 'CIVICUS Hackathon',
    year: '2022',
    role: 'Desarrollador e Integrador Web',
    stack: 'WordPress + HTML/CSS/JS',
    description: 'Subpágina informativa con fechas, requisitos y categorías; CSS personalizado para animaciones y UX; optimización de estructura y rendimiento.',
    url: 'https://reaccion.org.py/civicus-hackathon/'
  }
];

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="row g-4 mt-4 justify-content-center">
      {projects.map((project, idx) => {
        let cardStyle = {};
        let collapsed = false;
        if (isMobile) {
          collapsed = activeIndex !== idx;
          if (!collapsed) {
            cardStyle = {
              maxWidth: '420px',
              minHeight: '340px',
              opacity: 1,
              boxShadow: '0 4px 24px rgba(13,202,240,0.15)',
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              cursor: 'pointer',
              overflow: 'hidden',
              background: 'rgba(30,30,60,0.85)'
            };
          } else {
            cardStyle = {
              Width: '150px',
              minHeight: '60px',
              opacity: 0.85,
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              cursor: 'pointer',
              overflow: 'hidden',
              background: 'linear-gradient(90deg, #533483 60%, #1a1a2e 100%)',
              boxShadow: '0 2px 8px rgba(13,202,240,0.08)',
              border: '2px solid #533483'
            };
          }
        } else {
          cardStyle = {
            maxWidth: '100%',
            minHeight: '340px',
            opacity: 1,
            boxShadow: '0 4px 24px rgba(13,202,240,0.10)',
            background: 'rgba(30,30,60,0.85)'
          };
        }

        return (
          <div key={project.title} className="col-12 col-md-6 col-lg-4 d-flex">
            <div
              className={`p-3 rounded-4 border border-secondary h-100 w-100 d-flex flex-column project-card position-relative animate-fade-up`}
              style={{
                ...cardStyle,
                animationDelay: `${0.1 + idx * 0.1}s`
              }}
              onClick={() => {
                if (isMobile) setActiveIndex(idx);
              }}
            >
              <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
                <h4 className="mb-0 text-light" style={{
                  fontSize: collapsed ? '1.1rem' : '1.3rem',
                  fontWeight: collapsed ? 600 : 700,
                  letterSpacing: collapsed ? '0.02em' : '0.04em',
                  marginLeft: collapsed ? '0.5rem' : 0,
                  marginTop: collapsed ? '0.5rem' : 0,
                  marginBottom: collapsed ? 0 : '0.5rem',
                  transition: 'font-size 0.2s'
                }}>
                  {project.title}
                </h4>
                <span className="badge bg-info text-dark mb-2 mb-lg-0" style={{
                  fontSize: collapsed ? '0.9rem' : '1rem',
                  padding: collapsed ? '0.3em 0.7em' : '0.4em 1em'
                }}>{project.year}</span>
              </div>
              {/* Mostrar solo título y año en colapsado */}
              {collapsed ? null : (
                <>
                  <p className="small text-secondary mb-2">
                    <strong>Rol:</strong> {project.role}
                  </p>
                  <p className="small text-secondary mb-2">
                    <strong>Stack:</strong> {project.stack}
                  </p>
                  <p className="mb-3">{project.description}</p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-sm mt-auto">
                    Ver proyecto ↗
                  </a>
                </>
              )}
              {/* Indicador visual para expandir en móvil */}
              {isMobile && collapsed && (
                <div className="position-absolute bottom-0 start-0 w-100 text-center pb-2">
                  <span style={{
                    color: '#0dcaf0',
                    fontSize: '0.95rem',
                    opacity: 0.7,
                    marginTop: '10px',
                  }}>Expandir</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsSection;
