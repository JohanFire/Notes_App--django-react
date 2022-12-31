import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as AddButton } from '../assets/add.svg'

const AddNoteButton = () => {
    return (
        <Link to={"/note/new"} className="floating-button">
            <AddButton />
        </Link>
    )
}

export default AddNoteButton
