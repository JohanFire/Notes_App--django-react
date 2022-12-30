import React, { useState, useEffect } from 'react'

import ListItem from '../components/ListItem'

export default function NotesListPage() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        get_notes()
    }, [])

    const get_notes = async () => {
        const response = await fetch('/api/notes/')
        const data = await response.json()
        console.log(`DATA: `, data);
        setNotes(data)
    };

    return (
        <div style={{ backgroundColor: 'aqua' }}>
            <h2>hello from NotesListPage.js</h2>
            <div>
                {notes.map((note, index) => (
                    <ListItem key={index} note={note} />
                ))}
            </div>
        </div>
    )
}
