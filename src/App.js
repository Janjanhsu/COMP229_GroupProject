import logo from './assets/images/logo.jpg';
import './App.css';

import Flipcard from './components/flipcard/flipcard.js';


function App() {
  return (
    <>
      <header className="app-header">
        <img src={logo} className="logo" alt="logo" />
      </header>

      <div className="App">
        <h1>Flip Card Quiz</h1>
        <Flipcard />
      </div>


    </>
  );
}
export default App;
