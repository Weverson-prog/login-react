import React, {createContext, useEffect, useState} from 'react';
import { IContext , IAuthProvider, IUser} from './types';
import { LoginRequest, setUserLocalStorage, getUserLocalStorage } from './util';

export const AuthContext = createContext<IContext>({} as IContext)


export const AuthProvider = ({ children}: IAuthProvider)=>{
    const [user, setUser] = useState<IUser | null>();

    useEffect(()=>{
        const user = getUserLocalStorage()
        
        if(user){
            setUser(user)
        }
    }, [])

    async function authenticated (email: string, password: string){
        const response = await LoginRequest(email, password)  //resposta da api

        const payload = {token: response.token, email} 

        setUser(payload);
        setUserLocalStorage(payload)

    }
    async function dashboard (){
        
    }

    function logout(){
        setUser(null)
        setUserLocalStorage(null)
    }
    return (
        <AuthContext.Provider  value={{...user, authenticated, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
