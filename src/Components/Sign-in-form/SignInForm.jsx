import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../Context/UserContext';

import {
  createUser,
  createUserDocFromAuth,
  getUserFromDB
} from '../../Firebase/firebase';

import './Sign-in-form.scss';

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignInForm = () => {
  const [formFileds, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFileds;

  const [error, setError] = useState('');
  const [created, setCreated] = useState('');

  const { setCurrentUser } = useContext(UserContext);

  // Functions
  const clearForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = e => {
    e.preventDefault();
    const { name } = e.target;
    setFormFields({ ...formFileds, [name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password, confirmPassword } = formFileds;
    if (password.length < 6) {
      setError('a senha deve ter no mínimo 6 caracteres');
    }
    if (password !== confirmPassword) {
      setError('as senhas nao são compatíveis');
      return;
    }

    try {
      const { user } = await createUser(email, password);
      await createUserDocFromAuth(user, name);
      const userData = await getUserFromDB(user);
      setCurrentUser(userData);
      setError('');
      clearForm();
      setCreated('Usuário criado com sucesso !');
    } catch (err) {
      console.log(err, 'caiu no catch ');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Registrar</h1>
        <h2 className="created-user">{created}</h2>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <span className="error-p">{error}</span>
        <input
          type="password"
          name="password"
          placeholder="senha"
          value={password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar senha"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <button className="login-btn">Entrar</button>
        <p>
          <Link to="/"> Voltar </Link>
        </p>
      </form>
    </div>
  );
};
export default SignInForm;
