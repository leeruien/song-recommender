import './App.css';
// import the 3/4 other pages to be included
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chatbot from './pages/Chatbot';
import Dashboard from './pages/Dashboard';
import Predictor from './pages/Predictor';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <nav className="app-nav">
          <Link to="/" style={{ marginRight: '0.8rem' }}>Home</Link>
          <Link to="/chatbot" style={{ marginRight: '0.8rem' }}>Chatbot</Link>
          <Link to="/dashboard" style={{ marginRight: '0.8rem' }}>Dashboard</Link>
          <Link to="/predictor" style={{ marginRight: '0.8rem' }}>Predictor</Link>
        </nav>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/predictor" element={<Predictor />} />
            {/* Add routes for other pages here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
