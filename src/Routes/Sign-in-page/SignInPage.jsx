import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import Logo from '../../assets/Netflix-logo.png';
import SignInForm from '../../Components/Sign-in-form/SignInForm';

import { UserContext } from '../../Context/UserContext';

import './sign-in-page.scss';

const SignInPage = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="bg-img">
      <div className="bg-img-layer">
        <div className="login">
          <div className="logo">
            <img src={Logo} alt="Netflix Logo" />
          </div>
          <SignInForm />
          {currentUser ? <Navigate to="/movies" /> : null}
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
