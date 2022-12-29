import React, { useState, useEffect } from 'react'

export default function NotesListPage() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        get_notes()
    }, [])

    const get_notes = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/notes/')
        const data = await response.json()
        console.log(`DATA: `, data);
        setNotes(data)
    };

    return (
        <div style={{ backgroundColor: 'aqua' }}>
            <h2>hello from NotesListPage.js</h2>
            <div>
                {notes.map((note, index) => (
                    <p key={index}>{note.body}</p> // key={index}  is for DOM so each element has an unique key.
                ))}
            </div>
        </div>
    )
}
