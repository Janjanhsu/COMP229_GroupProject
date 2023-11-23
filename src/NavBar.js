import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/sign-in">Sign In</Link></li>
        <li><Link to="/log-in">Log In</Link></li>
        <li><Link to="/flashcard-quiz">Flashcard Quiz</Link></li> 
        <li><Link to="/ranking">Ranking</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;