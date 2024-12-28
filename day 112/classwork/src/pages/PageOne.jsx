import React from 'react'
import { useParams } from 'react-router-dom'

export default function Pages() {
    const {pageId} = useParams()
    const movies = ["movie1" , "movie2" , "movie3"]
    return (
    <div>
        page{pageId}{movies[pageId]}
    </div>
  )
}
