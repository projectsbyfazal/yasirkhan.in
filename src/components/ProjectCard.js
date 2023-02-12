import React from 'react';
import './style.css'

const ProjectCard = ({project}) => {
  return (
    <div>
      <img src={project.pimg} className="img-fluid" alt="Project images" />
      <h5 className='py-2 color'>{project.title}</h5>
      <p>{project.desc}</p>
      <a href={project.link} className="button shadow rounded" target="_blank" rel="noreferrer">View Live Demo</a>
    </div>
  )
}

export default ProjectCard;
