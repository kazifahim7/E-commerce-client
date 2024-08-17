import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext=createContext()
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)

    const [loading,setloading]=useState(false)
    const provider = new GoogleAuthProvider();


    const LogIn=(email,password)=>{
        
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signUp =(email,password)=>{
        
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const googleLogIN=()=>{
        
        return signInWithPopup(auth,provider)

    }

    const logOut=()=>{

        return signOut(auth)

    }


    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth, (users) => {
            console.log(users)
            setloading(false)
            setUser(users)
        })

        return ()=>unSubscribe()
    },[])








const authInfo={
    user,
    signUp,
    LogIn,
    googleLogIN,
    logOut,
    loading

}



    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }

        </AuthContext.Provider>
    );
};

export default AuthProvider;