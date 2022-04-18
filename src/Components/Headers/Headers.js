import React from 'react'
import './Headers.css';
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
// import useFirebase from '../Hooks/useFirebase';

function Headers() {
  // const { user } = useFirebase();
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <div className='Headers'>
      <Link to="/">Home</Link>
      <Link to="/Blogs">Blog</Link>
      <Link to="/About">About</Link>
      <Link to="/Register">Register</Link>
      {
      user ? 
      <button onClick={handleSignOut}>Sign Out</button> 
      : 
      < Link to="/Signin">Signin</Link>
       } 
    </div >
  )
}

export default Headers