import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import AddTutorial from './components/AddTutorial'; 
import TutorialList from './components/TutorialList'; 
function App() { 
  return ( 
    <Router> 
      <nav className="navbar navbar-expand navbar-dark bg-dark"> 
        <a href="/" className="navbar-brand"> 
          bezKoder 
        </a> 
        <div className="navbar-nav mr-auto"> 
          <li className="nav-item"> 
            <Link to={'/tutorials'} className="nav-link"> 
              Tutorials 
            </Link> 
          </li> 
          <li className="nav-item"> 
            <Link to={'/add'} className="nav-link"> 
              Add 
            </Link> 
          </li> 
        </div> 
      </nav> 
      <div className="container mt-3"> 
        <Routes> 
          <Route path="/" element={<TutorialList />} /> 
          <Route path="/tutorials" element={<TutorialList />} /> 
          <Route path="/add" element={<AddTutorial />} /> 
        </Routes> 
      </div> 
    </Router> 
  ); 
} 
export default App;