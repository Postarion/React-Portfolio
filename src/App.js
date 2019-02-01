import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import About from './components/pages/About'
import Project from './components/pages/Project'
import Contact from './components/pages/Contact'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
              <React.Fragment>
                <Main />
              </React.Fragment>
            )}/>
          <Route path="/about.html" component={About}/> 
          <Route path="/projects.html" component={Project}/> 
          <Route path="/contact.html" component={Contact}/> 
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
