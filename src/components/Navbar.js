// Navbar.js

import React from 'react';
import './Navbar.css';
 
const Navbar = ({ toggleAddForm    }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Habit-Tracker <img src='https://img.icons8.com/?size=1x&id=YxxyJdC0oxJf&format=png'></img></div>
     
      <button className="navbar__button" onClick={toggleAddForm}>
      <img src='https://img.icons8.com/?size=1x&id=UUgYZvYwoZrF&format=png'></img>  Create New Habit
      </button>
      
    </nav>
  );
};

export default Navbar;
