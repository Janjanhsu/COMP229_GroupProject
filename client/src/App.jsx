import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import { ThemeProvider } from "@material-ui/styles";
import MainRouter from "../MainRouter";
import theme from "../theme";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </Router>
  );
};

export default App;

/*
function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
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
                  <img src={Welcome} className="Welcome" alt="Welcome" width="864" height="432"/>
                  
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
*/