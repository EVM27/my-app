import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <img src={project.img} alt={project.category} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;