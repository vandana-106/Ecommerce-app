import { createContext,useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider =({children})=>
{
    const [user,setUser]=useState(()=>
    {
        const storedUser=localStorage.getItem("user");
        return storedUser? JSON.parse(storedUser):null;
    });

    const [token,setToken]=useState(()=>
    {
        return localStorage.getItem("token");
    });

    useEffect(()=>
    {
        if(user)
        {
            localStorage.setItem("user",JSON.stringify(user));
        }
        else
        {
            localStorage.removeItem("user");
        }

        if(token)
        {
            localStorage.setItem("token",token);
        }
        else
        {
            localStorage.removeItem("token");
        }

    },[user,token]);

    const login=(userData,tokenData)=>
    {
        setUser(userData);
        setToken(tokenData);
    }
    const logout=()=>
    {
        setUser(null);
        setToken(null);
    }
  return (
    <AuthContext.Provider value={{user,token,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext