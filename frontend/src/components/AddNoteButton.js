import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Add } from '../assets/add.svg'

const AddNoteButton = () => {
    return (
        <Link to={"/note/new"} className="floating-button">
            <Add />
        </Link>
    )
}

export default AddNoteButton
