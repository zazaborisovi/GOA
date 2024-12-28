import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const navlist = [
        {
          path: "/",
          name: "home page"
        },
        {
          path: "/books",
          name: "book page"
        },
        {
          path: "/books/new",
          name: "new book"
        },
        {
          path: "/books/new/pages",
          name: "new pages"
        },
        {
          path: "/books/modules",
          name: "book modules"
        },
        {
          path: "/books/:id",
          name: "book ids"
        },
      ]
  return (
    <div>
      <ul>
      {navlist.map((item , index) =>(
        
          <li key={`_navlinks ${index}`}>
            <Link to={item.path}>{item.name}</Link>
          </li>
      ))}
      </ul>
    </div>
  )
}
