import React from 'react';
import './style.css'

const ProjectCard = ({project}) => {
  return (
    <div>
      <div className='project_card shadow'>
      <img src={project.pimg} className="img-fluid" alt="Project images" />
      <div className='project_title'>
        <span className='text-white fs-5 fw-bold'>{project.title}</span>
        <a href={project.link} className="button shadow rounded" target="_blank" rel="noreferrer"><i className="bi bi-eye-fill"></i> View Live Demo</a>
      </div>
      </div>
    </div>
  )
}

export default ProjectCard;
