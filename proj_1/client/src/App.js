import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import UserPage from './components/UserPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/Register' element={<RegisterPage />} />
        <Route path='/UserPage' element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
