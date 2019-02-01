import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(){
    super();
    this.state = {
      showMenu: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickStyle = this.handleClickStyle.bind(this)
  }

  
  handleClick(){
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuBranding = document.querySelector('.menu-branding');
    const navItems = document.querySelectorAll('.nav-item');
    if(this.state.showMenu==false){
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');
      menuBranding.classList.add('show');
      navItems.forEach(item => item.classList.add('show'));
      this.setState({showMenu: !this.state.showMenu})
    }else{
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      menuBranding.classList.remove('show');
      navItems.forEach(item => item.classList.remove('show'));
      this.setState({showMenu: !this.state.showMenu})
      }
    }

  handleClickStyle(){
    document.body.style="";
    this.handleClick();
  }

  render() {
    return (
      <header>
        <div className="menu-btn" onClick={this.handleClick}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait"></div>
          </div>
          <ul className="menu-nav">
            <li className="nav-item">
              <Link onClick={this.handleClickStyle} className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link onClick={this.handleClick} className="nav-link" to="about.html">About Me</Link>
            </li>
            <li className="nav-item">
              <Link onClick={this.handleClick} className="nav-link" to="projects.html">My Projects</Link>
            </li>
            <li className="nav-item">
              <Link onClick={this.handleClick} className="nav-link" to="contact.html">Contact Me</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
