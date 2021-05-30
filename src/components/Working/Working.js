import React, { useState } from 'react'
import './style.css';
import v1 from './v1.svg'
import v2 from './v2.svg'
import c1 from './c1.svg'
import c2 from './c2.svg'
import c3 from './c3.svg'
import c4 from './c4.svg'

const Working = () => {
    return (
        <div className="how__it__works">
            <h1>How We Find <span>Best Careviger</span> For You</h1>
            <div className="path">
                <div className="vector1">
                    <img src={v1} />
                </div>
                <div className="vector2">
                    <img src={v2} />
                </div>
                <div className="vector3">
                    <img src={v1} />
                </div>
                <div className="path__box">
                    <img src={c1} />
                    <h1>1. Initial <br />Consultation</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.</p>
                </div>
                <div className="path__box">
                    <img src={c2} />
                    <h1>2. Customized Care Plan</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.</p>
                </div>
                <div className="path__box">
                    <img src={c3} />
                    <h1>3. Caregiver <br />Matching</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.</p>
                </div>
                <div className="path__box">
                    <img src={c4} />
                    <h1>4. Ongoing Support & Supervision</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.</p>
                </div>
            </div>
        </div>
    )
}

export default Working
