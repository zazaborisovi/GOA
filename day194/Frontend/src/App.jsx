import React, { useEffect } from 'react'

export default function App() {
  const HOST = "http://127.0.0.1:8000/api/tasks/"
  useEffect(()=>{
    async function myAPIGet() {
      const res = await axios.get(HOST)
      const data = await res.data
      console.log(data)
    }
    async function myAPIPut() {
      const fakePostData = { title: "ixvi", completed: true };
      const res = await axios.put(HOST+"2/", fakePostData);
      const data = await res.data;
      console.log(data);
    }
    async function myAPIPost() {
      const fakeHostData = {title: "idk" , completed: false}
      const res = await axios.post(HOST , fakeHostData)
      const data = await res.data
      console.log(data)
    }
    async function myAPIDelete() {
      const res = await axios.delete(HOST+"5/")
      const data = await res.data
      console.log(data)
    }
  })
  return (
    <div>
      
    </div>
  )
}
