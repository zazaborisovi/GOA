import React from 'react'
import { useParams } from 'react-router-dom'

export default function BookIds() {
    const params  = useParams()
    const arr = ["item1" , "item2" , "item3"]
    return (
        <div>
            <h1>BooksId {arr[params.id]}</h1>
        </div>
    )
}
