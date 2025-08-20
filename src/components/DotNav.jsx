import React from 'react'

const DotNav = ({ totalSections, activeIndex, onDotClick }) => {
  return (
    <nav 
      className="fps-dot-nav"
      aria-label="Navegación por secciones"
    >
      {Array.from({ length: totalSections }, (_, index) => (
        <button
          key={index}
          className={`fps-dot ${index === activeIndex ? 'fps-dot-active' : ''}`}
          onClick={() => onDotClick(index)}
          aria-label={`Ir a la sección ${index + 1}`}
          aria-current={index === activeIndex ? 'true' : 'false'}
          type="button"
        >
          <span className="fps-dot-inner" />
        </button>
      ))}
    </nav>
  )
}

export default DotNav
