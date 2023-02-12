import React from 'react';
import './style.css';

const Skills = () => {

    const skills = [
        {
            name: 'HTML5',
            known: '90%'
        },
        {
            name: 'CSS3',
            known: '85%'
        },
        {
            name: 'Javascript',
            known: '75%'
        },
        {
            name: 'Bootstrap',
            known: '90%'
        },
        {
            name: 'React JS',
            known: '70%'
        }
    ]

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
                
                {
                    skills.map((skill,i) => {
                        return (
                            <div className='mb-4' key={i}>
                                <h5 className='d-flex justify-content-between'><span>{skill.name}</span> <span>{skill.known}</span></h5>
                                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated progress-bg" style={{width: skill.known}}></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
      </div>
    </div>
  )
}

export default Skills;
