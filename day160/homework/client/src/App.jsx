import { useState , useEffect} from 'react'
import React from 'react'

export default function App() {
  const [notes , setNotes] = useState([])
  useEffect(() => {
    fetch('http://localhost:6969/api/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])
  
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
        notes.map(note => (
          <li key={note.id}>{note.text}</li>
        ))
        }
      </ul>
    </div>
  )
}
