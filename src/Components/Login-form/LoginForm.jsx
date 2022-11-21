import { useState, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import {
  auth,
  loginExistentUser,
  getUserFromDB
} from '../../Firebase/firebase';

import { UserContext } from '../../Context/UserContext';

//Style
import './Login-form.scss';
const defaultFormField = {
  email: '',
  password: ''
};
const LoginForm = () => {
  const [formField, setForm] = useState(defaultFormField);
  const { email, password } = formField;

  const [error, setError] = useState('');

  const { setCurrentUser } = useContext(UserContext);

  const handlesubmit = async e => {
    e.preventDefault();
    const { email, password } = formField;

    try {
      const { user } = await loginExistentUser(email, password);
      const userData = await getUserFromDB(user);
      setCurrentUser(userData);
    } catch (err) {
      console.log(err.code);
      if (err.code == 'auth/user-not-found') {
        setError('Crie uma conta !');
      }
    }
  };
  const handleChange = e => {
    e.preventDefault();

    const { name } = e.target;
    setForm({ ...formField, [name]: e.target.value });
  };
  return (
    <div className="login-container">
      (
      <>
        <form onSubmit={handlesubmit} className="login-form">
          <h1>Entrar</h1>
          <h3 className='h3-error'>{error}</h3>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="senha"
            value={password}
            onChange={handleChange}
            required
          />
          <button className="login-btn">Entrar</button>
          <p>
            Novo por aqui? <Link to="/sign-in">Assine agora.</Link>
          </p>
        </form>
      </>
    </div>
  );
};
export default LoginForm;
