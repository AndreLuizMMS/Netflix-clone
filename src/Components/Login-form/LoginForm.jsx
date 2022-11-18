import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { auth, loginExistentUser } from '../../Firebase/firebase';

//Style
import './Login-form.scss';
const defaultFormField = {
  email: '',
  password: ''
};
const LoginForm = () => {
  const [formField, setForm] = useState(defaultFormField);
  const { email, password } = formField;

  const handlesubmit = e => {
    e.preventDefault();
    const { email, password } = formField;
    loginExistentUser(auth, email, password);
  };
  const handleChange = e => {
    e.preventDefault();

    const { name } = e.target;
    setForm({ ...formField, [name]: e.target.value });
  };
  return (
    <div className="login-container">
      {true ? (
        <>
          <form onSubmit={handlesubmit} className="login-form">
            <h1>Entrar</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="senha"
              value={password}
              onChange={handleChange}
            />
            <button className="login-btn">Entrar</button>
            <p>
              Novo por aqui? <Link to="/sign-in">Assine agora.</Link>
            </p>
          </form>
        </>
      ) : (
        <Navigate to="/home" />
      )}
    </div>
  );
};
export default LoginForm;
