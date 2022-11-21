import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// import instance from '../../utils/axios/axios';

import { UserContext } from '../../Context/UserContext';

import './Movies.scss';

const Movies = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  useEffect(() => {
  }, []);
  return (
    <>
      {currentUser ? null : <Navigate to="/" />}
      <div>
        <h1>movies page</h1>
      </div>
    </>
  );
};
export default Movies;
