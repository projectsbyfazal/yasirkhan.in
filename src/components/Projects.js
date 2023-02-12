import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const projectCardData = [
        {
            id: 1,
            pimg: "./images/translation.png",
            title: "Translation App",
            link: "https://projectsbyfazal.github.io/translationapp/",
            desc: "This app help you to translate 98 different languages using Internet connection and supports various functionalities"
        },
        {
            id: 2,
            pimg: "./images/weather.png",
            title: "Weather App",
            link: "https://projectsbyfazal.github.io/weatherapp/",
            desc: "This weather app shows weather details like temperature, air-pressure, humidity, sunset, sunrise of searching city"
        },
        {
            id: 3,
            pimg: "./images/dictionary.png",
            title: "Dictionary App",
            link: "https://projectsbyfazal.github.io/dictionaryapp/",
            desc: "This app helps us to find meaning of paticular word with its synonyms and also an example for better understanding"
        },
        {
            id: 4,
            pimg: "./images/qrcode.png",
            title: "QRCode-Generator App",
            link: "https://projectsbyfazal.github.io/qrcodegeneratorapp/",
            desc: "This app will generate unique qr code for particular text, website links in image form and also valid when scanned"
        },
        {
            id: 5,
            pimg: "./images/university.png",
            title: "University Website",
            link: "https://universitywebsitebyfazal.netlify.app/",
            desc: "This is a multi-pages static website for ms university which has various sections like home,about,contact,courses"
        },
        {
            id: 6,
            pimg: "./images/todoList.png",
            title: "Todo-List App",
            link: "https://projectsbyfazal.github.io/todoapp/",
            desc: "This app will help you to listout all tasks you have todo, you can also update tasks,and delete if they completed"
        },
        {
            id: 7,
            pimg: "./images/codeEditor.png",
            title: "Code-Editor App",
            link: "https://basic-code-editor.netlify.app/",
            desc: "This is a basic code-editor that can help in developing websites, it allow to write code for HTML,CSS,Javascript"
        },
        {
            id: 8,
            pimg: "./images/hospital.png",
            title: "Hospital Website",
            link: "https://projectsbyfazal.github.io/hospitalwebsite/website.html",
            desc: "This is a basic and static landing page of hospital website includes various sections and it is fully responsive"
        },
        {
            id: 9,
            pimg: "./images/notesapp.png",
            title: "Notes App",
            link: "https://projectsbyfazal.github.io/notesapp/",
            desc: "This is a basic notes app like google keep which can help us to save our quickly thoughts or any text with dates. "
        }
        
    ];

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
                        <div className="col-md-4 gx-md-5 col-sm-5 col-11 my-4 gx-4 text-center" key={project.id}>
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
