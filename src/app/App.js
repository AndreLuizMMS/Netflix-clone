import { Routes, Route } from 'react-router-dom';
//Components
import LoginPage from '../Routes/Login-page/LoginPage';
import SignInPage from '../Routes/Sign-in-page/SignInPage';
import Movies from '../Routes/Movies/Movies';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<LoginPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
