import { useState, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { auth, loginExistentUser } from '../../Firebase/firebase';

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

  const { setCurrentUser } = useContext(UserContext);

  const handlesubmit = async e => {
    e.preventDefault();
    const { email, password } = formField;

    try {
      const { user } = await loginExistentUser(email, password);
      setCurrentUser(user); 
    } catch (err) {
      console.log(err, 'caiu no catch');
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
    </div>
  );
};
export default LoginForm;
