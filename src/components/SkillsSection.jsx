import React from 'react';

const SkillsSection = () => {
  return (
    <div className="row g-3 mt-4 justify-content-center">
      {['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap 5', 'Node.js', 'MongoDB'].map((skill) => (
        <div key={skill} className="col-md-4 col-lg-3">
          <div className="p-3 bg-dark bg-opacity-50 rounded-3 border border-secondary text-center">
            {skill}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
