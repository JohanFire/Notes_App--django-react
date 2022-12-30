import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <p>Hello world!. This is my App.js</p>
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
