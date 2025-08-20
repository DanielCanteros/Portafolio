import React from 'react';

function CartaPresentacion({ personal }) {
  return (
    <section className="container py-4" aria-labelledby="cover-title">
      <h2 id="cover-title" className="fw-bold fs-4 mb-2">Carta de presentación (lista para enviar)</h2>
      <div className="border rounded-4 bg-secondary bg-opacity-10 p-4">
        <p><strong>Destinatario:</strong> <a href="mailto:mperalta@5dias.com.py">mperalta@5dias.com.py</a></p>
        <p><strong>Asunto:</strong> Cargo Desarrollador Frontend Remoto – Daniel Canteros</p>
        <p>
          Hola, equipo de 5días:<br />
          Me postulo al <strong>cargo de Desarrollador Frontend Remoto</strong>. Cuento con <strong>+3 años</strong> de experiencia con <strong>HTML, CSS y JavaScript (ES6+)</strong> y <strong>+1 año</strong> con <strong>React.js</strong>. Manejo <strong>Tailwind CSS</strong> para diseño responsivo y puedo trabajar con <strong>Bootstrap 5</strong>. Tengo experiencia con <strong>Node.js</strong> y <strong>MongoDB</strong> para integraciones de backend, y despliegues en <strong>Vercel/Render</strong>.<br />
          En mi portafolio encontrarán trabajos relevantes como <strong>igelstore.com</strong>, la subpágina <strong>CIVICUS Hackathon</strong> y la landing para la publicación “Una esperanza probada”.<br />
          Quedo a disposición para una prueba técnica o entrevista.<br />
          ¡Gracias por su tiempo!<br />
          Atentamente,<br />
          <strong>Daniel Canteros</strong><br />
          Ciudad del Este, Paraguay<br />
          <a href={`mailto:${personal.email}`}>{personal.email}</a> · {personal.phone}
        </p>
      </div>
    </section>
  );
}

export default CartaPresentacion;
