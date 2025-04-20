import React from 'react';
import { Link } from 'react-router-dom'; // <-- Importar Link
import './Panel.css';
import Footer from '../component/Footer';
import Naver from '../component/Naver';

const Shifts = () => {
  return (
    <div className="panel-container">
      <Naver />

      <main className="panel-content">
        <h1>SHIFTS (Turnos)</h1>
      <div className="contEmployes"></div>
      </main>

      <Footer />
    </div>
  );
};

export default Shifts;
