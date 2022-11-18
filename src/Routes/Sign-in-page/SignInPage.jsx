import Logo from '../../assets/Netflix-logo.png';
import SignInForm from '../../Components/Sign-in-form/SignInForm';

import './sign-in-page.scss';

const SignInPage = () => {
  return (
    <div className="bg-img">
      <div className="bg-img-layer">
        <div className="login">
          <div className="logo">
            <img src={Logo} alt="Netflix Logo" />
          </div>
          <SignInForm />
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
