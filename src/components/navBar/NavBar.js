import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="left"><Link to="./flashcard-quiz">Flashcard Quiz</Link></li> 
        <li><Link to="./ranking/Ranking">Ranking</Link></li>
        <li className="right"><Link to="/logIn/SignUp">Sign Up</Link></li>
        <li><Link to="/logIn/LogIn">Log In</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;