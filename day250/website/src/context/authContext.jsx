import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

const API_URL = import.meta.env.VITE_API_URL + "/auth"

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const autoSignin = async () => {
      try {
        const res = await fetch(`${API_URL}/auto-signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include"
        })
        
        const data = await res.json()
        if (!res.ok) return console.log(data.message)
        
        setUser(data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    autoSignin()
  }, [])
  
  const signin = async(formData) => {
    try {
      const res = await fetch(`${API_URL}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
        credentials: "include"
      })
      
      const data = await res.json()
      if (!res.ok) return console.log(data.message)
      
      setUser(data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  
  const signout = async () => {
    try {
      const res = await fetch(`${API_URL}/signout`, {
        method: "POST",
        credentials: "include"
      })
      
      const data = await res.json()
      if (!res.ok) return console.log(data.message)
      
      setUser(null)
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <AuthContext.Provider value={{ user, signin, signout , loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider