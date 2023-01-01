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
        if (noteId === 'new') return

        const response = await fetch(`/api/notes/${noteId}`)
        const data = await response.json()
        setNote(data)
        console.log(`DATA: `, data);
    };

    const post_note = async () => {
        fetch(`/api/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    };

    const update_note = async () => {
        fetch(`/api/notes/${noteId}/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
        // send user back to home page
        // window.location.href = '/'
    };

    const delete_note = async () => {
        fetch(`/api/notes/${noteId}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    const handle_submit = () => {
        console.log('NOTE:', note);
        if (noteId !== 'new' && note.body === '') {
            // This is not working yet, hmmm.
            // What exactly? 
            // I was trying to delete an existing Note when you erase all content and click the back arrow.

            // delete_note()
            // console.log('delete_note()');
        } else if (noteId !== 'new') {
            update_note()
            console.log('update_note()');
        } else if (noteId === 'new' && note !== null) {
            post_note()
            console.log('post_note()');
        }
    };

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link to="/" >
                        <ArrowLeft onClick={handle_submit} />
                    </Link>
                </h3>
                {noteId !== 'new' ? (
                    <Link to={"/"}>
                        <button onClick={delete_note}>Delete</button>
                    </Link>
                ) : (
                    <Link to={"/"}>
                        <button onClick={post_note}>Save</button>
                    </Link>

                )}
            </div>
            <textarea
                onChange={(e) => { setNote({ ...note, 'body': e.target.value }) }}
                defaultValue={note?.body}>
            </textarea> {/*if note is not null, then show the body*/}
        </div >
    )
}

export default NotePage

