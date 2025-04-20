import React from 'react';
import { Link } from 'react-router-dom'; // <-- Importar Link
const Naver = () => {
  return (
    <header className="navbar">
    <div className="user-info">
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Avatar"
        className="avatar"
      />
      <span className="username">Administrador</span>
    </div>
    <nav className="nav-links">
      <Link to="/panel">Home</Link>
      <Link to="/calendary">Calendary</Link>
      <Link to="/shifts">Shifts</Link>
      <Link to="/employees">Employees</Link>
    </nav>
    </header>
  );
};

export default Naver;
