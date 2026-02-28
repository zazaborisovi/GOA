import {useEffect, useState} from 'react' 
import { useAuth } from '../context/authContext';
import {useForm} from "../hooks/useForm"


export default function Signin(){
  const { signin, signout, user } = useAuth()
  
  const [formData, handlechange] = useForm({
    email: '',
    password: '',
  })
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await signin(formData)
  }
  
  return (
    <div> 
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={formData.email} onChange={handlechange} />
        <input type="password" name="password" value={formData.password} onChange={handlechange} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
