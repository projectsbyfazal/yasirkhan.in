import React from 'react';
import './style.css';
import yasir1 from '../images/yasir1.jpg';

const About = () => {
  return (
    <div>
      <div className="container py-4" id='about'>
        <div className='text-center mt-5'>
            <h2>About Me</h2>
            <h5 className='color'>--Who i am?--</h5>
        </div>
        <div className="row mt-4 justify-content-around align-items-center">
            <div className='col-md-4 col-11 my-4'>
              <img src={yasir1} className='img-fluid rounded shadow yasir_img' alt="yasir khan" />
            </div>
            <div className='col-md-7 col-11 my-4'>
              <h4 className="fw-bold ">I'm Yasir Khan and I'm a <span className='color'>Web developer</span></h4>
              <p className='fs-5 py-2'>
                Hi I am Yasir Fazal Khan, I'm 20 years old. I am staying in Vadodara since born.
                I have decided to grow my career in web development domain. I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.<br/>
                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills then don't hesitate to contact me.

              </p>
              <a href="./yasir_resume.pdf" download className='button rounded shadow'>Download CV</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About;
