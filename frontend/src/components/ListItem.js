import React from 'react'
import { Link } from 'react-router-dom'

const get_title = (note) => {
    const title = note.body.split('\n')[0]

    return title.length > 40 ? title.substring(0, 40) + '...' : title
};

const ListItem = ({ note }) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className='notes-list-item'>
                <h3>{get_title(note)}</h3>
            </div>
        </Link>
    )
}

export default ListItem
