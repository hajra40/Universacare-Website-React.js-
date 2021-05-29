import React from 'react'
import './style.css';
import chap from './CHAP.png'

const Credits = () => {
    return (
        <div className="credit">
            <img src={chap} />
            <div className="credit__content">
                <h1>CHAP Accreditation and this line can be about this big</h1>
                <p>UniversaCare, LLC will provide the following home health care programs at flexible schedules and cost-friendly service rates. </p>
            </div>

        </div>
    )
}

export default Credits
