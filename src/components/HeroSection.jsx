import React, { useEffect, useRef } from 'react';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const HeroSection = ({ section, index, showHeader = false }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-hero');
    }
    return () => {
      if (heroRef.current) {
        heroRef.current.classList.remove('animate-hero');
      }
    };
  }, [section.id]);

  return (
    <>
      {/* Header fijo solo cuando se especifica */}
      {showHeader && (
        <div className="position-absolute top-0 start-0 w-100" style={{ zIndex: 1000 }}>
          {/* El Header se pasa desde el componente padre */}
        </div>
      )}
      
      <div className="container">
        {/* Home Section - Layout especial */}
        {section.id === 'home' && (
          <div className="hero-section" ref={heroRef}>
            <div className="hero-content">
              <div className="row align-items-center min-vh-100">
                {/* Columna izquierda - Textos */}
                <div className="col-lg-7 col-md-6">
                  <div className="text-start">
                    <h1 className="hero-title fw-bold mb-3 animate-fade-up" style={{
                      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                      lineHeight: '1.1'
                    }}>
                      {section.title}
                    </h1>
                    
                    <h2 className="hero-subtitle mb-4 text-info animate-fade-up" style={{
                      fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                      lineHeight: '1.2',
                      animationDelay: '0.1s'
                    }}>
                      {section.subtitle}
                    </h2>
                    
                    <p className="hero-description lead mb-5 animate-fade-up" style={{ 
                      maxWidth: '100%', 
                      fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                      lineHeight: '1.6',
                      animationDelay: '0.2s'
                    }}>
                      {section.content}
                    </p>

                    <div className="hero-actions d-flex flex-column flex-sm-row gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                      <a href="https://drive.google.com/file/d/1yTHqKxdcW-PUkcGAgQNGoWdcwNuncDLu/view?usp=sharing" className="btn btn-info btn-lg px-4 py-3" target="_blank" style={{
                        fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'
                      }}>
                        Ver mi trabajo
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Columna derecha - Círculo */}
                <div className="col-lg-5 col-md-6 d-none d-md-flex justify-content-center mt-4 mt-md-0">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-dark shadow-lg position-relative"
                    style={{
                      width: 'clamp(250px, 40vw, 400px)',
                      height: 'clamp(250px, 40vw, 400px)',
                      backgroundColor: '#0dcaf0',
                      fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                      boxShadow: '0 10px 30px rgba(13, 202, 240, 0.3)',
                      pointerEvents: 'none'
                    }}
                  >
                    {/* Imagen del celular - posicionada en la parte izquierda */}
                    <img 
                      src="/celular.png" 
                      alt="Desarrollo móvil"
                      style={{
                        position: 'absolute',
                        left: '35%',
                        top: '-10%',
                        width: '100%',
                        height: 'auto',
                        pointerEvents: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Todas las demás secciones - Layout consistente */}
        {section.id !== 'home' && (
          <div className="section-content">
            <h1 
              id={`heading-${index}`}
              tabIndex={-1}
              className="display-2 fw-bold mb-4 text-center"
              style={{ outline: 'none' }}
            >
              {section.title}
            </h1>
            
            <p className="lead mb-4 text-center mx-auto" style={{ 
              maxWidth: '600px',
              fontSize: '1.2rem',
              lineHeight: '1.6'
            }}>
              {section.content}
            </p>

            {/* Renderizar componente específico según la sección */}
            {section.id === 'skills' && <SkillsSection />}
            {section.id === 'projects' && <ProjectsSection />}
            {section.id === 'contact' && <ContactSection />}
          </div>
        )}
      </div>
    </>
  );
};

export default HeroSection;


