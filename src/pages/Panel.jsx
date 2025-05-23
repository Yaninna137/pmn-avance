import React from 'react';
import { Link } from 'react-router-dom'; // <-- Importar Link
import './Panel.css';
import Footer from '../component/Footer';
import Naver from '../component/Naver';

const Panel = () => {
  return (
    <div className="panel-container">
      <Naver />

      <main className="panel-content">
        <h1>HOME</h1>
        <p>Bienvenido Usuario</p> {/* Tu contenido se mantiene igual aquí */}
      </main>

      <Footer />
    </div>
  );
};

export default Panel;
