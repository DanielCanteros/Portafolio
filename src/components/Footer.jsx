import React from 'react';

function Footer({ personal }) {
  return (
    <footer className="w-100 px-4 py-4 text-center text-secondary small" role="contentinfo">
      © {new Date().getFullYear()} {personal.name} — Hecho con React + Bootstrap
    </footer>
  );
}

export default Footer;
