import React from 'react'
import project1 from '../../img/projects/project1.jpg'
import memGen from '../../img/projects/memGen.png'
import project2 from '../../img/projects/project2.jpg'
import project3 from '../../img/projects/project3.jpg'
import project4 from '../../img/projects/project4.jpg'

class Project extends React.Component{
  constructor(){
    super();
  }

  componentWillMount(){
    document.body.style.background = "#7e7e7e";
  }

  render(){
    return(
      <div>
        <main id="work">
        <h1 class="lg-heading">
          My <span class='text-secondary'>Projects</span>
        </h1>
        <h2 class="sm-heading">
          Check out some of my work...
        </h2>
        <div class="projects">
        
        <div class="item">
            <a href="https://github.com/Postarion/shelterWebsite">
              <img src={project1} alt="Project"/>

            </a>
            <a href="https://github.com/Postarion/shelterWebsite" class="btn-light">
              <i class="fab fa-github"></i> Github
            </a>
        </div>
        <div class="item">
              <a href="https://github.com/Postarion/react-memeGenerator">
                <img src={memGen}alt="Project"/>
              </a>
              <a href="https://github.com/Postarion/react-memeGenerator" class="btn-light">
                  <i class="fab fa-github"></i> Github
              </a>
            </div>
            <div class="item">
                <a href="https://github.com/Postarion/TempConverter">
                  <img src={project2} alt="Project"/>
                </a>
                <a href="https://github.com/Postarion/TempConverter" class="btn-light">
                    <i class="fab fa-github"></i> Github
                </a>
            </div>
            <div class="item">
                <a href="https://github.com/Postarion/udemyFrogger-OOP">
                  <img src={project3} alt="Project"/>
                </a>
                <a href="https://github.com/Postarion/udemyFrogger-OOP" class="btn-light">
                    <i class="fab fa-github"></i> Github
                </a>
            </div>
            <div class="item">
                <a href="https://github.com/Postarion/BookList">
                  <img src={project4} alt="Project"/>
                </a>
                <a href="https://github.com/Postarion/BookList" class="btn-light">
                    <i class="fab fa-github"></i> Github
                </a>
            </div>
    
    
        </div>
        </main>
      </div>
     ) 
  }
 
}

export default Project