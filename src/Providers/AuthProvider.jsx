import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

 export  const AuthContext = createContext(null)
 const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading , setLoading] = useState(true)

  const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const loggedUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut = () =>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
   const unsubcribe = onAuthStateChanged(auth ,loggeduser=>{
      console.log('logged user inside',loggeduser)
      setUser(loggeduser)
      setLoading(false)
    })

    return () =>{
      unsubcribe ()
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    loggedUser,
    logOut
  }

  return (
    <AuthContext.Provider value = {authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;