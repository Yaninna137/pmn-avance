import React, { useState } from 'react';
import './Login.css';
// import { Link } from "react-router-dom";
import Footer from '../component/Footer'; // <-- importar
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate(); // <- esto

  const handleLogin = () => {
    // Aquí podrías validar los campos en el futuro
    navigate("/panel"); // Te lleva al Panel
  };

  return (
    <div className="login-container">
      <div className={`card ${flipped ? 'flipped' : ''}`}>
        {/* Login */}
        <div className="front">
          <h2>Iniciar Sesión</h2>
          <input type="email" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          {/* Este lo puedes borrar si ya no lo necesitas */}
          {/* <Link to="/panel"><button>Ir al Panel</button></Link> */}
          <button onClick={handleLogin}>Entrar</button>
          <p>
            ¿No tienes una cuenta?{' '}
            <span onClick={() => setFlipped(true)}>Regístrate</span>
          </p>
        </div>

        {/* Registro */}
        <div className="back">
          <h2>Registro Administrador</h2>
          <input type="text" placeholder="Nombre completo" />
          <input type="text" placeholder="Empresa" />
          <input type="email" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          <input type="password" placeholder="Confirmar contraseña" />
          <button>Registrarse</button>
          <p className="admin-note">
            El registro es solo para administradores. Si eres empleado, espera que tu jefe administrativo te registre.
          </p>
          <p>
            ¿Ya tienes una cuenta?{' '}
            <span onClick={() => setFlipped(false)}>Inicia sesión</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
