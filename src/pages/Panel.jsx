import React from 'react';
import { Link } from 'react-router-dom';

export default function Panel() {
  return (
    <div>
      <h2>Bienvenido al Panel</h2>
      <Link to="/">Cerrar sesión</Link>
    </div>
  );
}
