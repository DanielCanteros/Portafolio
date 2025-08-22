import React, { useEffect, useRef } from 'react';

const techStack = [
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'Bootstrap 5',
  'Node.js',
  'MongoDB',
];

const SkillsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Forzar reflow para animaciones en cada render
      Array.from(containerRef.current.children).forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
          el.style.transition = 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 100 + i * 70);
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-4"
    >
      {techStack.map((tech) => (
        <div
          key={tech}
          className="d-flex align-items-center justify-content-center bg-dark bg-opacity-50 border border-secondary text-light fw-semibold"
          style={{
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            fontSize: '1.1rem',
            textAlign: 'center',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            transition: 'transform 0.2s',
            opacity: 0,
            transform: 'translateY(30px)',
          }}
        >
          {tech}
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
