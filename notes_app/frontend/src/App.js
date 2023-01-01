import { HashRouter as Router, Route, Routes } from 'react-router-dom'

// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className='app'>
          <Header />
          <p style={{ float: 'right' }}>
            <a href='https://github.com/JohanFire' target={'_blank'}>github.com/johanfire</a>
          </p>
          <br></br>
          <Routes>
            <Route path="/" element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
