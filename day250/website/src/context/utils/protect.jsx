import { Navigate } from "react-router";
import { useAuth } from "../authContext";

export const Protect = ({ children }) => {
  const { user, loading } = useAuth()
  
  if (loading) {
    return (<div>Loading...</div>)
  }
  
  return user?.id ? <>{children}</> : <Navigate to="/signin" />
}