import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Home/Header/Header';
import Projects from './components/Projects/Projects';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>

 
    </div>
  );
}

export default App;
