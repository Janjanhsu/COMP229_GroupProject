import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/images/logo.jpg';
import Welcome from './assets/images/Welcome.png';
import './styles/App.css';
import NavBar from './components/navBar/NavBar';
import SignUp from './components/logIn/Register';
import LogIn from './components/logIn/LogIn';
import FlashcardQuiz from './components/flipcard/FlashcardQuiz';
import Ranking from './components/ranking/Ranking';

function App() {
  return (
    <Router>
      <header className="app-header">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <NavBar />
      </header>

      <Routes>
        <Route path="/logIn/SignUp" element={<SignUp />} />
        <Route path="/logIn/LogIn" element={<LogIn />} />
        <Route path="/flashcard-quiz" element={<FlashcardQuiz />} />
        <Route path="/ranking/ranking" element={<Ranking />} />
        <Route path="/" element={
          <div className="App">
            <img src={Welcome} className="Welcome" alt="Welcome" width="864" height="432"/>
            <Link to="/flashcard-quiz" className="big-button">Go to FlashCard Quiz</Link>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;