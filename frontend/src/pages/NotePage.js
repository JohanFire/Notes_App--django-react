import React from 'react'
import { useParams } from 'react-router-dom'

const NotePage = () => {
    // const noteId = match.params.id // react-router-dom v5 syntax
    // const noteId = useParams().id // react-router-dom v6 syntax
    const { id: noteId } = useParams() // react-router-dom v6 syntax another way of writing it

    return (
        <div>
            <h1>Single NotePage.js: {noteId}</h1>
        </div>
    )
}

export default NotePage

