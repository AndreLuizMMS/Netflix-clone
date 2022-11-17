import LoginForm from '../../Components/Login-form/LoginForm';
import Logo from '../../assets/Netflix-logo.png';

import './Login-page.scss';

const LoginPage = () => {
  return (
    <>
      <div className="bg-img">
        <div className="bg-img-layer">
          <div className="login">
            <div className="logo">
              <img src={Logo} alt="Netflix Logo" />
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
