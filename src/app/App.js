import { Routes, Route } from 'react-router-dom';
//Components
import LoginPage from '../Routes/Login-page/LoginPage';
import Home from '../Routes/Home/Home';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
