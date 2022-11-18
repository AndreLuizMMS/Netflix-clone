import { Routes, Route } from 'react-router-dom';
//Components
import LoginPage from '../Routes/Login-page/LoginPage';
import Home from '../Routes/Home/Home';
import SignInPage from '../Routes/Sign-in-page/SignInPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
