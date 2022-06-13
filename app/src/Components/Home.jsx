import React from 'react'
import { Navbar } from './Navbar'
import { auth } from '../config/config';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithRedirect, signInAnonymously, createUserWithEmailAndPassword } from "firebase/auth";

export const Home = () => {
  const navigate = useNavigate()
  const handleGoogle = ()=>{
    createUserWithEmailAndPassword(auth, 'katesnow2002@gmail.com', '12345678')
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  
  }
  return (
    <div>
        <Navbar />
        <button onClick={handleGoogle}></button>
    </div>
  )
}
