import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/images/logo.jpg';
import './App.css';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import LogIn from './components/LogIn';
import FlashcardQuiz from './components/FlashcardQuiz';
import Ranking from './components/Ranking';

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
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/flashcard-quiz" element={<FlashcardQuiz />} />
        <Route path="/ranking" element={<Ranking />} />
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