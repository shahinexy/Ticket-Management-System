import { createContext, useEffect, useState } from 'react';
import auth from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [User, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, pass) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const signIn = (email, pass) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log(`Current User: ${currentUser}`);
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    }, [])

    const UserInfo = { User, setUser, loading, createUser, signIn };

    return (
        <AuthContext.Provider value={UserInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
