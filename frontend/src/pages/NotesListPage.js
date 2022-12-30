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
        <div className='notes'>
            <div className='notes-header'>
                <h2 className='notes-title'>&#9782; Notes</h2>
                <p className='notes-count'>{notes.length}</p>
            </div>
            <div className='notes-list'>
                {notes.map((note, index) => (
                    <ListItem key={index} note={note} />
                ))}
            </div>
        </div>
    )
}
