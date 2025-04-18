import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <h2>Pantalla de Login</h2>
      <Link to="/panel">Ir al Panel</Link>
    </div>
  );
}
