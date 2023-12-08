// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="./logIn/SignUp">Sign Up</Link></li>
        <li><Link to="./logIn/LogIn">Log In</Link></li>
        <li><Link to="./flashcard-quiz">Flashcard Quiz</Link></li> 
        <li><Link to="./ranking/Ranking">Ranking</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;