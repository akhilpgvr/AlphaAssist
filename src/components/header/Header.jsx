import React from 'react';
import './Header.css'
import ai_logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-left">
          <a href="https://github.com/akhilpgvr" target="_blank" rel="noopener noreferrer">
            <img src={ai_logo} alt="logo of Aps" className="logo" />
          </a>
          <h1>AlphaAssist</h1>
          
        </div>

        <div className="header-right">
          <p>Your ultimate guide for every query, from code to clarity</p>
        </div>
      </div>
      
      <hr />
    </div>
  );
};

export default Header;
