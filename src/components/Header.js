import React from "react";
import "./style.css";
import yasir2 from '../images/yasir2.png';

const Header = () => {

  document.addEventListener('scroll', ()=>{

    if(window.scrollY > 50){
      document.getElementById('navbar').classList.add('stickyNav');
      document.getElementsByClassName('scrolltotop')[0].classList.add('show');
    }
    else{
      document.getElementById('navbar').classList.remove('stickyNav');
      document.getElementsByClassName('scrolltotop')[0].classList.remove('show');
    }
  });

  return (
    <div id="top">
      <nav className="navbar navbar-expand-lg navbar-dark px-md-0 px-3 bgColor" id="navbar">
        <div className="container">
          <a className="navbar-brand fs-3 fw-bold" href="#home">
            MyPortfolio.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end align-items-center"
            id="navbarNav"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <a
                  href="#home"
                  className="nav-link text-white fs-5 pb-1 mx-1 fw-semibold"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  className="nav-link text-white fs-5 pb-1 mx-1 fw-semibold"
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#skills"
                  className="nav-link text-white fs-5 pb-1 mx-1 fw-semibold"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#projects"
                  className="nav-link text-white fs-5 pb-1 mx-1 fw-semibold"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className="nav-link text-white fs-5 pb-1 mx-1 fw-semibold"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="bgColor" id="home">
        <div className="container">
          <div className="row header text-center text-md-start justify-content-around align-items-center">
            <div className="col-md-5 order-2 order-md-1 text-light">
              <h5 >Hello, my name is,</h5>
              <h2 className="fw-bold name">Yasir Fazal Khan</h2>
              <h4>
                And I'm a <span className="color fw-bolder">Web Developer</span>
              </h4>
              <p className="fs-5 mt-4">
                I enjoy creating things that live on the internet.
              </p>
              <a href="./yasir_resume.pdf" download className="rounded button mt-4">
                Download CV
              </a>
            </div>
            <div className="col-md-5 order-1 order-md-2" >
              <img src={yasir2} className="img-fluid h-img" alt="yasir khan" />
            </div>
          </div>
        </div>
      </div>


      <span className="scrolltotop">
        <a href="#top" className="">
          <i className="bi bi-arrow-up-circle-fill"></i>
        </a>
      </span>
    </div>
  );
};

export default Header;
