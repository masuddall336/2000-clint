import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({ children }) => {
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const userInfo = {
    creatUser,
    signInUser
  }
  return (
    <div>
      <AuthContext value={userInfo}>
        {children}
      </AuthContext>
    </div>
  );
};

export default AuthProvider;