import React from 'react'
import './style.css';
import save from './healthcare.svg'

const Request = () => {
    return (
        <div className="request">
             <div className="request__content">
                <h1>WE DO WHATEVER IT MAKES TO <br />BRING YOU PEACE OF MIND</h1>
                <button className="btn">REQUEST AN APPOINTMENT</button>
            </div>
            <div className="request__img">
                <img src={save} />
            </div>
        </div>
    )
}

export default Request
