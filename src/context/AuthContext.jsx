import {createContext, useState, useEffect, useContext } from 'react'
import {auth, db} from '../Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { doc, setDoc} from 'firebase/firestore'
const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const signUp = (email, password) =>{
        createUserWithEmailAndPassword(auth, email,password)
       setDoc(doc(db, 'user', email),{
            watchList:[]
        })
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth,email, password)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    useEffect (()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        }) 
        return () =>{
            unsubscribe()
        }
    }, [])
  return (
    <AuthContext.Provider value={{user, signIn, signUp, logOut}}>
        {children}
    </AuthContext.Provider>
  )
}
export const useAuthContext = () =>{
    return useContext(AuthContext)
}
export default AuthContextProvider