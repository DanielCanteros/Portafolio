import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import FullPageScroller from './components/FullPageScroller';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

// Secciones del portafolio
const sections = [
  {
    id: 'home',
    title: 'Daniel Canteros',
    subtitle: 'Frontend Developer',
    content: 'Desarrollador especializado en React, Next.js y experiencias web modernas',
    bgColor: '#1a1a2e'
  },
  {
    id: 'about',
    title: 'Sobre Mí',
    content: 'Más de 3 años creando interfaces modernas, intuitivas y responsivas',
    bgColor: '#16213e'
  },
  {
    id: 'skills',
    title: 'Habilidades',
    content: 'React.js, Next.js, Tailwind CSS, Node.js, MongoDB',
    bgColor: '#0f3460'
  },
  {
    id: 'projects',
    title: 'Proyectos',
    content: 'Portafolio de trabajos y experiencias profesionales',
    bgColor: '#533483'
  },
  {
    id: 'contact',
    title: 'Contacto',
    content: 'Disponible para nuevos proyectos y oportunidades',
    bgColor: '#2d1b45'
  }
];

function App() {
  const handleIndexChange = (index) => {
    console.log('Sección activa:', sections[index].id);
  };

  return (
    <div lang="es" style={{ background: '#1a1a2e', minHeight: '100vh' }}>
      <FullPageScroller onIndexChange={handleIndexChange}>
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            role="region"
            aria-labelledby={`heading-${index}`}
            style={{
              backgroundColor: section.bgColor,
              color: 'white',
              padding: '2rem',
              minHeight: '100vh',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* Header fijo solo en la primera sección */}
            {index === 0 && (
              <div className="position-absolute top-0 start-0 w-100" style={{ zIndex: 1000 }}>
                <Header />
              </div>
            )}
            
            {/* MUCHO MÁS LIMPIO: Solo HeroSection maneja todo */}
            <HeroSection 
              section={section} 
              index={index} 
              showHeader={index === 0}
            />
          </section>
        ))}
      </FullPageScroller>
    </div>
  );
}

export default App;