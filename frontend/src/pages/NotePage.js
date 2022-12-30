import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = () => {
    const { id: noteId } = useParams() // react-router-dom v6 syntax another way of writing it
    const [note, setNote] = useState(null)

    useEffect(() => {
        get_note()
    }, [noteId]) // if I dont pass an empty array, it will run it infinitely

    const get_note = async () => {
        const response = await fetch(`/api/notes/${noteId}`)
        const data = await response.json()
        setNote(data)
        console.log(`DATA: `, data);
    };

    return (
        <div className='note'>
            <div className='note-header'></div>
            <h3>
                <Link to="/">
                    <ArrowLeft />
                </Link>
            </h3>
            <textarea defaultValue={note?.body}></textarea> {/*if note is not null, then show the body*/}
        </div >
    )
}

export default NotePage

