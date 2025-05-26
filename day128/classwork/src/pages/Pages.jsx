import { Link, Outlet } from 'react-router-dom'
import React from 'react'

export default function PageLayout() {
  return (
    <>
        <div>
            <Link to={"/pages/0"}>page1</Link> 
            <Link to={"/pages/1"}>page2</Link>
            <Link to={"/pages/2"}>page3</Link>
        </div>
        <Outlet />
    </>
  )
}
