import React from 'react'
import p1 from './p1.jpeg'
import p2 from './p2.jpeg'
import p3 from './p3.jpeg'
import p4 from './p4.jpeg'
import p5 from './p5.jpeg'
import p6 from './p6.jpeg'
import './style.css';

const Images = () => {
    return (
        <div className="images">
            <img src={p1} />
            <img src={p2} />
            <img src={p3} />
            <img src={p4} className="hide"/>
            <img src={p5} className="hide"/>
            <img src={p6} className="hide"/>
        </div>
    )
}

export default Images
