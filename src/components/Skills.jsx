import React from 'react';

function Skills({ skills, techStack }) {
  return (
    <section id="skills" className="container py-4" aria-labelledby="skills-title">
      <h2 id="skills-title" className="fw-bold fs-4 mb-2">Habilidades técnicas</h2>
      <ul className="row row-cols-2 g-2 list-unstyled mb-0">
        {techStack.map((s) => (
          <li key={s} className="col border rounded-3 bg-dark bg-opacity-50 px-2 py-1 text-center small">{s}</li>
        ))}
      </ul>
      <div className="mt-3">
        <ul>
          {skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <li><strong>Frontend:</strong> React.js, React Native, Next.js (básico), Vite, React Router, Axios/Fetch, Context/Redux básico.</li>
          <li><strong>UI / Estilos:</strong> Tailwind CSS, Bootstrap 5, CSS Modules, Flexbox, Grid, Animaciones CSS.</li>
          <li><strong>Backend:</strong> Node.js (Express), MongoDB (Mongoose), JWT básico.</li>
          <li><strong>Calidad:</strong> Git/GitHub (branches, PRs), linters (ESLint/Prettier), pruebas básicas con Jest/RTL.</li>
          <li><strong>CMS y contenido:</strong> WordPress (temas, plantillas, shortcodes, SEO técnico básico).</li>
          <li><strong>DevOps:</strong> Vercel, Render; manejo de DNS y variables de entorno.</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
