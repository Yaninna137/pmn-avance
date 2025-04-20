// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Panel from './pages/Panel';
import Calendary from './pages/Calendary';
import Shifts from './pages/Shifts';
import Employees from './pages/Employees';


// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/calendary" element={<Calendary />} />
        <Route path="/shifts" element={<Shifts />} />

      </Routes>
    </div>
  );
}

export default App;
