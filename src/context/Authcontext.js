import React, {useState, createContext, useContext, useEffect} from "react";
import {auth} from '../firebase';
// import { AuthContext } from "../components/SignUp";

const AuthContext = createContext()
//custom hook to use context
export function useAuthContext() {
    return useContext(AuthContext);
}


export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password);
    }
    
    useEffect(() => {
        const removerUser = auth.onAuthStateChanged((user) =>{setCurrentUser(user)
        setLoading(false);});
        return removerUser;
    }, []);
    const values = {
        currentUser,
        signup,
        login
    }
    return (
        <AuthContext.Provider value={values}>
            {!loading && children}
        </AuthContext.Provider>
    )
}