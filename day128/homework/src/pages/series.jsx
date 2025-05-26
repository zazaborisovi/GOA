import React from 'react'
import { useParams } from 'react-router-dom'

export default function series() {
     const {pageId} = useParams()
     const series = ["shua qalaqshi" , "qerchi"]
     return (
        <div>
           Page{pageId}{series[pageId]}
        </div>
  )
}