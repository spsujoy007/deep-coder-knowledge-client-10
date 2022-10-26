import React, { useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { createContext } from 'react';
import app from '../../Firebase/firebase.init';



export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
               console.log('user inside state change', currentUser);
               if(currentUser === null || currentUser.emailVerified){
                   setUser(currentUser);
               }
               setLoading(false);
           });
           return ()=>{
               unsubscribe();
           }
   
       },[])

    const authInfo = {user, createUser, signIn, updateUserProfile, logOut, googleSignIn , emailVerify}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;