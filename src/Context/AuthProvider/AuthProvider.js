import React, { useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { createContext } from 'react';
import app from '../../Firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth, (currentUser)=>{
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

    const authInfo = {user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;