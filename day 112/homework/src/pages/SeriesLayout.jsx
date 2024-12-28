import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

export default function SeriesLayout() {
  return (
    <>
     <div style={{display:'flex' , gap: 20, }}>
        <Link to={`/series/ShuaQalaqshi`}>Shua Qalaqshi</Link>
        <Link to={`/series/Qerchi`}>Qerchi</Link>
     </div>
    </>
  )
}
