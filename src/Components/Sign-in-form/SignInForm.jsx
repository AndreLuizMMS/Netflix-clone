import { useState } from 'react';
import { Link } from 'react-router-dom';

import { createUser } from '../../Firebase/firebase';

import './Sign-in-form.scss';

const defaultFormFields = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignInForm = () => {
  const [formFileds, setFormFields] = useState(defaultFormFields);
  const { name, lastName, email, password, confirmPassword } = formFileds;

  const [error, setError] = useState('');
  const [created, setCreated] = useState('')

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
    if (password !== confirmPassword) {
      setError('as senhas nao são compatíveis');
      return;
    }
    try {
      const { user } = await createUser(email, password);
      console.log(user);
      setError('');
      clearForm();
      setCreated('Usuário criado com sucesso')

    } catch (err) {
      console.log(err, 'caiu no catch ');
    }
  };
 
   return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Registrar</h1>
        <span className='created-user'>{created}</span>
        <div className="name-container">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Sobrenome"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <span className="error-p">{error}</span>
        <input
          type="password"
          name="password"
          placeholder="senha"
          value={password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar senha"
          value={confirmPassword}
          onChange={handleChange}
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
