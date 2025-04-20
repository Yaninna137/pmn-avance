// src/pages/Employees.jsx
import React from 'react';
import Naver from '../component/Naver';
import Footer from '../component/Footer';

const Employees = () => {
  return (
    <div className="panel-container">
      <Naver />
      <main className="panel-content">
        <h1>EMPLOYEES</h1>
        <div className="contEmployes"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Employees;
