import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import FullPageScroller from './components/FullPageScroller';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Experiencia from './components/Experiencia';

// Secciones del portafolio
const sections = [
  {
    id: 'home',
    title: 'Daniel Canteros',
    subtitle: 'Fullstack Developer',
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
    content: 'Principales herramientas utilizadas',
    bgColor: '#0f3460'
  },
  {
    id: 'projects',
    title: 'Proyectos',
    content: 'Experiencias profesionales',
    bgColor: '#533483'
  },
  {
    id: 'contact',
    title: 'Contacto',
    content: 'Disponible para nuevos proyectos y oportunidades',
    bgColor: '#2d1b45'
  }
];

const techStack = [
  'React.js',
  'Next.js (básico)',
  'React Native',
  'Tailwind CSS',
  'Bootstrap 5',
  'Node.js (Express)',
  'MongoDB',
  'Vercel / Render',
  'Git / GitHub',
  'WordPress',
];

const personal = {
  name: 'Daniel Canteros',
  email: 'danielcanteros1998@gmail.com',
  phone: '+595 992756617',
  linkedin: 'https://www.linkedin.com/in/daniel-canteros-41b761135/',
  github: 'https://github.com/DanielCanteros',
};

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
            className={`fade-in-section`}
            style={{
              backgroundColor: section.bgColor,
              color: 'white',
              padding: '1rem',
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
            
            {/* Lógica de renderizado donde corresponde - en App.jsx */}
            {section.id === 'home' && (
              <HeroSection 
                section={section} 
                index={index} 
                showHeader={index === 0}
              />
            )}
            
            {section.id === 'about' && (
              <HeroSection section={section} index={index}>
                <h1 className="display-2 fw-bold mb-2 text-center animate-fade-up" style={{ animationDelay: '0.05s' }}>
                  {section.title}
                </h1>
                <p className="lead mb-2 text-center mx-auto animate-fade-up" style={{ animationDelay: '0.15s', maxWidth: '600px' }}>
                  {section.content}
                </p>
                <div className="animate-fade-up" style={{ animationDelay: '0.25s' }}>
                  <Experiencia />
                </div>
              </HeroSection>
            )}
            
            {section.id === 'skills' && (
              <HeroSection section={section} index={index}>
                <h1 className="display-2 fw-bold mb-2 text-center animate-fade-up" style={{ animationDelay: '0.05s' }}>
                  {section.title}
                </h1>
                <p className="lead mb-2 text-center mx-auto animate-fade-up" style={{ animationDelay: '0.15s', maxWidth: '600px' }}>
                  {section.content}
                </p>
                <div className="animate-fade-up" style={{ animationDelay: '0.25s' }}>
                  <SkillsSection />
                </div>
              </HeroSection>
            )}
            
            {section.id === 'projects' && (
              <HeroSection section={section} index={index}>
                <h1 className="display-2 fw-bold mb-2 text-center animate-fade-up" style={{ animationDelay: '0.05s' }}>
                  {section.title}
                </h1>
                <p className="lead mb-2 text-center mx-auto animate-fade-up" style={{ animationDelay: '0.15s', maxWidth: '600px' }}>
                  {section.content}
                </p>
                <div className="animate-fade-up" style={{ animationDelay: '0.25s' }}>
                  <ProjectsSection />
                </div>
              </HeroSection>
            )}
            
            {section.id === 'contact' && (
              <HeroSection section={section} index={index}>
                <h1 className="display-2 fw-bold mb-2 text-center animate-fade-up" style={{ animationDelay: '0.05s' }}>
                  {section.title}
                </h1>
                <p className="lead mb-2 text-center mx-auto animate-fade-up" style={{ animationDelay: '0.15s', maxWidth: '600px' }}>
                  {section.content}
                </p>
                <div className="animate-fade-up" style={{ animationDelay: '0.25s' }}>
                  <ContactSection />
                </div>
              </HeroSection>
            )}
          </section>
        ))}
      </FullPageScroller>
    </div>
  );
}

export default App;