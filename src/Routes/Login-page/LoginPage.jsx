import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import LoginForm from '../../Components/Login-form/LoginForm';

import Logo from '../../assets/Netflix-logo.png';
import './Login-page.scss';
import { UserContext } from '../../Context/UserContext';

const LoginPage = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="bg-img">
      <div className="bg-img-layer">
        <div className="login">
          <div className="logo">
            <img src={Logo} alt="Netflix Logo" />
          </div>
          <LoginForm />
          {currentUser ? <Navigate to="/movies" /> : null}
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
