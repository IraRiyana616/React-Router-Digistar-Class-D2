import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Contacts from './components/Contacts';
import Media from './components/Media';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Tambahkan Link ke masing-masing halaman yang ada dibawah ini:*/}
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <Link to="/media">Media</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<h1>Welcome</h1>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/media" element={<Media />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
