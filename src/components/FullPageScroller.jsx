import React, { useState, useEffect, useRef } from 'react';
import DotNav from './DotNav';

const FullPageScroller = ({ children, onIndexChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const sectionsCount = React.Children.count(children);

  // Función para cambiar de sección
  const goToSection = (index) => {
    if (index < 0 || index >= sectionsCount || index === currentIndex || isAnimating) return;
    
    setCurrentIndex(index);
    setIsAnimating(true);
    
    if (containerRef.current) {
      containerRef.current.style.transform = `translateY(-${index * 100}vh)`;
    }
    
    setTimeout(() => {
      setIsAnimating(false);
      if (onIndexChange) onIndexChange(index);
    }, 700);
  };

  // Manejo de scroll
  useEffect(() => {
    let deltaY = 0;
    
    const handleWheel = (e) => {
      e.preventDefault();
      if (isAnimating) return;
      
      deltaY += e.deltaY;
      
      if (Math.abs(deltaY) > 100) {
        const direction = deltaY > 0 ? 1 : -1;
        const targetIndex = currentIndex + direction;
        
        if (targetIndex >= 0 && targetIndex < sectionsCount) {
          goToSection(targetIndex);
        }
        
        deltaY = 0;
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [currentIndex, sectionsCount, isAnimating]);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <div
        ref={containerRef}
        style={{
          height: '100%',
          transition: 'transform 0.7s ease',
          transform: `translateY(-${currentIndex * 100}vh)`
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} style={{ height: '100vh', width: '100%' }}>
            {child}
          </div>
        ))}
      </div>
      
      <DotNav
        totalSections={sectionsCount}
        activeIndex={currentIndex}
        onDotClick={goToSection}
      />
    </div>
  );
};

export default FullPageScroller;



