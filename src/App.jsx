import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/images/logo.jpg';
import './styles/App.css';
import NavBar from './components/navBar/NavBar';
import SignUp from './components/logIn/Register';
import LogIn from './components/logIn/LogIn';
import FlashcardQuiz from './components/flipcard/FlashcardQuiz';
import Ranking from './components/ranking/Ranking';

//import { dbConnect } from './database/db';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <NavBar />
        </header>

        <main className="app-content">
          <Routes>
            <Route path="/logIn/SignUp" element={<SignUp />} />
            <Route path="/logIn/LogIn" element={<LogIn />} />
            <Route path="/flashcard-quiz" element={<FlashcardQuiz />} />
            <Route path="/ranking/ranking" element={<Ranking />} />
            <Route
              path="/"
              element={
                <div className="home">
                  <h1>Welcome to the Home Page</h1>
                  <Link to="/flashcard-quiz" className="big-button">
                    Go to FlashCard Quiz
                  </Link>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
