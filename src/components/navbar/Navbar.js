import React, { useState } from 'react'
import brand from './UCLogo.svg'
import './style.css'

const Navbar = () => {

    return (
        <div className="navbar">
            <img className="logo" src={brand} />
            <div className="lg_nav">
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
                <div className="phone">
                    <i class="fas fa-phone-alt"></i>
                    <h1><span>866-986-3356</span></h1>
                </div>
            </div>
            
            <div className="sm__nav">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Navbar
