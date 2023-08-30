import React from 'react';
// import { Navigate } from 'react-router-dom'
// import { useAuth } from './../hooks/use-auth'
// import { useDispatch } from 'react-redux';
// import { removeUser } from './../store/slices/userSlice'
import Header from '../components/header/Header';

const HomePage = () => {
  // const dispatch = useDispatch();
  // const { isAuth, email } = useAuth();
  return (
    <div>
      <Header />
    </div>
  )
  // return isAuth ? (
  //   <div>
  //     <Header />
  //     <h1>Welcome</h1>
  //     <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
  //   </div>
  // ) : (
  //   <Navigate to='/login' />
  // )
}

export default HomePage;