import { createContext, useContext, useState , useEffect } from "react";
import { Alert } from "react-native";

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

const API_URL = import.meta.env.VITE_API_URL + "/auth"

const fetchOptions = {
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "include"
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    (async() => {
      try {
        const res = await fetch(`${API_URL}/auto-signin`, {
          method: "POST",
          ...fetchOptions
        })
        const data = await res.json()
        
        if(!res.ok) {
          Alert.alert(data.message)
          return console.log(data.message)
        }
        setUser(data.user)
      }
      catch (err) {
        Alert.alert(err.message)
        console.log(err.message)
      }
    })()
  }, [])
  
  const signup = async(formData) => {
    try {
      const res = await fetch(`${API_URL}/signup`, {
        method: "POST",
        body: JSON.stringify(formData),
        ...fetchOptions
      })
      const data = await res.json()
      
      if (!res.ok) {
        Alert.alert(data.message)
        return console.log(data.message)
      }
      setUser(data.user)
    } catch (err) {
      Alert.alert(err.message)
      console.log(err.message)
    }
  }
  
  const signin = async (formData) => {
    try {
      const res = await fetch(`${API_URL}/signin`, {
        method: "POST",
        body: JSON.stringify(formData),
        ...fetchOptions
      })
      const data = await res.json()
      
      if (!res.ok) {
        Alert.alert(data.message)
        return console.log(data.message)
      }
      
      setUser(data.user)
    } catch (err) {
      Alert.alert(err.message)
      console.log(err.message)
    }
  }
  
  return (
    <AuthContext.Provider value={{ user, signup, signin }}>
      {children}
    </AuthContext.Provider>
  )
}