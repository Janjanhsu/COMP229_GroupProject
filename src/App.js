import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/images/logo.jpg';
import './styles/App.css';
import NavBar from './components/navBar/NavBar';
import SignIn from './components/logIn/SignIn';
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
        <Route path="/logIn/SignIn" element={<SignIn />} />
        <Route path="/logIn/LogIn" element={<LogIn />} />
        <Route path="/flashcard-quiz" element={<FlashcardQuiz />} />
        <Route path="/ranking/ranking" element={<Ranking />} />
        <Route path="/" element={
          <div className="App">
            <h1>Welcome to the Home Page</h1>
            <Link to="/flashcard-quiz" className="big-button">Go to FlashCard Quiz</Link>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;