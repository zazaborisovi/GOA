import { useEffect, useRef } from 'react';
import { createContext, useState } from 'react';
import { io } from 'socket.io-client'

export const ChatContext = createContext();

export const ChatProvider = ({children}) =>{
  const [chats , setChats] = useState([])
  const [currentChat , setCurrentChat] = useState(null)
  const [message , setMessage] = useState("")
  const socketRef = useRef(null)
  
  useEffect(() =>{
    socketRef.current = io('http://localhost:3000')
    socketRef.current.on("newMessage", (message) =>{
      setMessage((prev) => [...prev , message])
    })
    return () => socketRef.current.disconnect()
  }, [])
  
  const joinChat = (id) =>{
    if(currentChat === id) return
    
    socketRef.current.emit("join", id)
    setCurrentChat(id)
  }
  const fetchChats = async () =>{
    const response = await fetch('/api/chat')
    const data = await response.json()
    setChats(data)
  }
  const createChat = async (title , members) =>{
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title , members})
    })
    const data = await response.json()
    setChats((prev) => [...prev , data])
    return data
  }
  const fetchMessages = async (id) =>{
    const response = await fetch(`/api/message/${id}`)
    const data = await response.json()
    setMessage(data)
  }
  const sendMessage = async (id , message) =>{
    const response = await fetch(`/api/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id , message})
    })
    const data = await response.json()
    setMessage((prev) => [...prev , data])
  }
  const searchUser = async (query) =>{
    const response = await fetch(`/api/user/search/${query}` , {credentials: "include"})
    const data = await response.json()
    return data
  }
  
  return(
    <ChatContext.Provider value={{chats , currentChat , fetchChats , createChat , fetchMessages , sendMessage , searchUser , joinChat}}>
      {children}
    </ChatContext.Provider>
  )
}