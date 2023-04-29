import React from 'react';
import ProjectCard from './ProjectCard';
import { projectCardData } from './projectDetails';

const Projects = () => {

  return (
    <div>
      <div className="container py-4" id="projects">
        <div className='text-center'>
            <h2>My Projects</h2>
            <h5 className='color'>--what i have created--</h5>
        </div>
        <div className="row justify-content-center mt-4">
            {
                projectCardData.map((project)=>{
                    return (
                        <div className="col-md-3 gx-md-3  col-sm-6 col-11 my-2 text-center" key={project.id} >
                            <ProjectCard project={project}/>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Projects;
