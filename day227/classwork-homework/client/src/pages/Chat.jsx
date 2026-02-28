import { useContext, useEffect } from 'react'
import { ChatContext } from '../context/chat.context.jsx'
import './pages.css'

export default function Chat(){
  const { chats, fetchChats, joinChat, currentChat } = useContext(ChatContext)

  useEffect(() => {
    fetchChats?.()
  }, [])

  return (
    <main className="chat-layout">
      <aside className="chat-list">
        <header>
          <h1>PulseChat</h1>
          <p className="muted">Pick a channel to see recent activity.</p>
        </header>
        <ul>
          {chats.map((chat) => (
            <li key={chat.id} className={currentChat === chat.id ? 'active' : ''}>
              <button onClick={() => joinChat(chat.id)}>
                <strong>{chat.title}</strong>
                <span>{chat.members?.length ?? 0} members</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <section className="chat-empty">
        <div>
          <h2>Select a conversation</h2>
          <p className="muted">
            Choose a chat from the list to view messages and catch up with your team.
          </p>
        </div>
      </section>
    </main>
  )
}
