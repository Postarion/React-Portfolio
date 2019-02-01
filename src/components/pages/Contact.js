import React from 'react'


class Contact extends React.Component{
 
  componentWillMount(){
    document.body.style.background = "#7e7e7e";
  }
  
  render(){
    return(
      <div>
        <main id="contact">
          <h1 className="lg-heading">
            Contact <span className='text-secondary'>Me</span>
          </h1>
    
          <div className="boxes">
            <div className="email">
              <span className="text-secondary">Email:</span> d.olszewski21@gmail.com
            </div>
            <div>
              <span className="text-secondary">Phone:</span> (+48) 503 494 324
            </div>
            <div>
              <span className="text-secondary">Address:</span> Gdynia, Poland
            </div>
          
          </div>
        </main>
      </div>
     ) 
  }
}

export default Contact