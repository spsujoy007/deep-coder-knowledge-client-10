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
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const emailVerify = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
    }

    const popUpSign = (provider) => {
        setLoading(true);
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

    const authInfo = {user, createUser, signIn, updateUserProfile, logOut, popUpSign , emailVerify}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;