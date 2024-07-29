import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} type="button" className="bd-btn-link btn_dark" >
            Back
        </button>
    )
}

export default BackButton