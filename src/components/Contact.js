import React from 'react';
import emailjs from 'emailjs-com';
import './style.css';

const Contact = () => {

    function sentEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_aha7cae','template_agkbvft', e.target,'762kAAKgR52D5zfCd')
        .then(res => {
                alert("Email was sent successfully");
                window.location.reload();
            }
        ).catch(err => {
                alert(err);
        });
    }

  return (
    <div>
        <div className="container py-4" id='contact'>
        <div className='text-center'>
            <h2>Contact Me</h2>
            <h5 className='color'>--Connect we with--</h5>
        </div>
        <div className="row mt-4 justify-content-around">
            <div className='col-md-5 col-11 my-4'>
                <h4>Get in Touch</h4>
                <p className='mb-4 fs-5'>
                    Feel free to Contact me by submitting the form and I will get back to you as soon as possible
                </p>
                {/* <h4>Follow me on</h4> */}
                <div className='fs-3 mb-4'>
                    <a href="https://github.com/projectsbyfazal"  className='me-3 text-dark' target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                    <a href="https://www.instagram.com/yasirkhan_92/" className='me-3 text-dark' target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.facebook.com/yasirfazal.khan.794" className='me-3 text-dark' target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/yasir-fazal-khan-783a62252/" className='me-3 text-dark' target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                </div>
                <ContactInfo icon="bi bi-person-circle fs-1 color" heading="Name"  content="Yasir Fazal Khan"/>
                <ContactInfo icon="bi bi-geo-alt-fill fs-1 color" heading="Address"  content="Vadodara, Gujarat, India."/>
                <ContactInfo icon="bi bi-envelope-fill fs-1 color" heading="Email"  content="yasirkhan8104@gmail.com"/>
            </div>
            <div className='col-md-5 col-11 my-4 '>
                <h4>Message me</h4>
                <form onSubmit={sentEmail}>
                    <div className="row mt-4">
                        <div className="col-md-6 mb-4">
                            <input type="text" name="name" className='form-control field' required placeholder='Full name..'/>
                        </div>
                        <div className="col-md-6 mb-4">
                            <input type="email" name="user_email" className='form-control field' required placeholder='Email Id..'/>
                        </div>
                        <div className="col-12 mb-4">
                            <input type="text" name="subject" className='form-control field' required placeholder='Subject..'/>
                        </div>
                        <div className="col-12 mb-4">
                            <textarea name="message" className='form-control field' required placeholder='Your message..' rows="4"></textarea>
                        </div>
                    </div>
                    <button className='button rounded border-0 shadow'>Send message</button>
                </form>
            </div>
        </div>
      </div>

      <footer className='py-3 bg-dark text-center text-light'>
        <p className='fs-5 px-4'>
            Created by <span className='color'>Yasir Khan</span> | &copy; 2023 All rights reserved.
        </p>
      </footer>
    </div>
  )
}

const ContactInfo = (props) => {
    return (
        <div className="row">
            <div className="col-2">
                <i className={props.icon}></i>
            </div>
            <div className="col-9">
                <h5>{props.heading}</h5>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default Contact;
