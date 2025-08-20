import React from 'react';

const ProjectsSection = () => {
  return (
    <div className="row g-4 mt-4 justify-content-center">
      <div className="col-md-6 col-lg-5">
        <div className="p-4 bg-dark bg-opacity-50 rounded-3 border border-secondary h-100">
          <h4 className="mb-3">IgelStore</h4>
          <p className="mb-0">E-commerce con React y Tailwind</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-5">
        <div className="p-4 bg-dark bg-opacity-50 rounded-3 border border-secondary h-100">
          <h4 className="mb-3">Quántico</h4>
          <p className="mb-0">Landing para campaña editorial</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
