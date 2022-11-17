import { useState } from 'react';
import { Navigate } from 'react-router-dom';

//Style
import './Login-form.scss';

const LoginForm = () => {
  const [user, setUser] = useState(false);

  const handlesubmit = e => {
    e.preventDefault();
    setUser(true);
  };
  return (
    <div className="login-container">
      {!user ? (
        <form onSubmit={handlesubmit} className="login-form">
          <h1>Entrar</h1>
          <input type="email" name="login-email" placeholder="Email" />
          <input type="password" name="login-password" placeholder="senha" />
          <button className="login-btn">Entrar</button>
        </form>
      ) : (
        <Navigate to='/home'/>
      )}
    </div>
  );
};
export default LoginForm;
