import React from 'react'
import { Link } from 'react-router-dom'

const get_title = (note) => {
    const title = note.body.split('\n')[0]

    return title.length > 40 ? title.substring(0, 40) + '...' : title
};

const get_time = (note) => {
    return new Date(note.updated_at).toLocaleDateString()
    // return new Date(note.updated_at).toLocaleString()
};

const get_content = (note) => {
    const title = get_title(note)
    let content = note.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, '')

    if (content.length > 40) {
        return content.slice(0, 40) + '...'
    } else {
        return content
    }
};

const ListItem = ({ note }) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className='notes-list-item'>
                <h3>{get_title(note)}</h3>
                <p><span>{get_time(note)}</span></p>
                <span>{get_content(note)}</span>
            </div>
        </Link>
    )
}

export default ListItem
