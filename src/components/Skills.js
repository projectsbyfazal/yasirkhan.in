import React from 'react';
import './style.css';
import html from '../images/html.png';
import css from '../images/css.png';
import bootstrap from '../images/bootstrap.png';
import javascript from '../images/javascript.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import github from '../images/github.png';
import tailwind from '../images/tailwind.png';
import mysql from '../images/mysql.png';

const Skills = () => {

    const skills =[
        {image:html, name:"HTML5"},
        {image:css, name: "CSS3"},
        {image:javascript, name: "Javascript"},
        {image:bootstrap, name: "Bootstrap"},
        {image:tailwind, name: "Tailwind CSS"},
        {image:react, name: "ReactJs"},
        {image:redux, name: "Redux"},
        {image:mysql, name: "MySQL"},
        {image:github, name: "Github"}
    ];

  return (
    <div>
      <div className="container py-4" id='skills'>
        <div className='text-center'>
            <h2>My Skills</h2>
            <h5 className='color'>--what i know--</h5>
        </div>
        <div className="row mt-4 justify-content-center align-items-center">

            <div className="col-md-6 my-4 col-11 order-2 order-md-1">
                <h2>My creative skills</h2>
                <p className='my-4 fs-5'>
                    See, these are my technical skills which i have learned for my career. i know this much is not enough, many advanced technologies launched in the market but my learning process is continuously going on and along with it i have also created many projects using frontend skills and you will find some of them if you scroll down⬇️ little.
                </p>
                <a href="mailto:yasirkhan8104@gmail.com" className='button shadow rounded border-0'>Say Hello</a>
            </div>

            <div className="col-md-6 my-4 col-11 order-1 order-md-2">
                <div className="row justify-content-center ">
                    {
                        skills.map((skill,i) => {
                            return (
                                <div className="col-4 p-md-2 p-3 text-center skill" key={i} >
                                    <img src={skill.image} className='skill_img' alt="skill" />
                                    <strong className='d-block font-weight-bold'>{skill.name}</strong>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Skills;
