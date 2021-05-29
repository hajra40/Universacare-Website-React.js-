import React from 'react'
import brand from './UCLogo.svg'
import './style.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={brand} />
            <div className="menu">
                <ul>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>RESOURCES</li>
                    <li>CAREERS</li>
                    <li>HOME CARE HEROES</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className="contact">
                <h1><span>866-986-3356</span></h1>
            </div>
        </div>
    )
}

export default Navbar
