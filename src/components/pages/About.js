import React from 'react'
import myPicture from '../../img/myPicture.jpg'

class About extends React.Component{
  constructor(){
    super();
  }
  componentWillMount(){
    document.body.style.background = "#7e7e7e";
  }

  render(){
    return(
      <div>
        <main id="about">
          <h1 className="lg-heading">
            About <span className='text-secondary'>Me</span>
          </h1>
          <h2 className="sm-heading">
            Let me tell you a few things...
          </h2>
          <div className="about-info">
            <img src={myPicture} alt="Daniel Olszewski" className="bio-image"/>
            <div className="bio">
              <h3 className="text-secodary">BIO</h3>
              <p>Programming is my passion. I spend almost all my free time doing projects or watching tech videos.
              I am currently working on developing my JavaScript and React skills. I graduated from The Gdynia Maritime University. </p>
            </div>
    
            <div className="job-title">
              <h3>Courses</h3>
            </div>
    
              <div className="job job-1">
                <h3>Responsive Web Design Fundamentals by Google</h3>
                <h6>Udemy</h6>
              </div>
              <div className="job job-2">
                <h3>Website Performance Optimization by Google</h3>
                <h6>Udemy</h6>
              </div>
              <div className="job job-3">
                <h3>Object-Oriented JavaScript</h3>
                <h6>Udemy</h6>
              </div>
              <div className="job job-4">
                <h3>JavaScript Design Pattern</h3>
                <h6>Udemy</h6>
              </div>
              <div className="job job-5">
                <h3>JavaScript Testing</h3>
                <h6>Udemy</h6>
              </div>
              <div className="job job-6">
                <h3>JavaScript Promises</h3>
                <h6>Udemy</h6>
              </div>
            </div>
        </main>
      </div>
     ) 
    }
  }
 

export default About