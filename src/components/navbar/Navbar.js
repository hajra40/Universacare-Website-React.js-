import React, { useState } from 'react'
import brand from './UCLogo.svg'
import './style.css'

const Navbar = () => {

    const [show , setShow] = useState('close');

    const handleMenu = (x) => {
        setShow('show');

    }

    const close = ()  => {
        setShow('close');

    }

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
                    <i className="fas fa-phone-alt"></i>
                    <h1><span>866-986-3356</span></h1>
                </div>
            </div>
            
            <div className="sm__nav">
                <i class="fa fa-bars" onClick={handleMenu}  aria-hidden="true"></i>
                <div className={`nav ${show}`}>
                    <i class="fa fa-times" onClick={close} aria-hidden="true"></i>
                        <ul>
                            <li onClick={close}>ABOUT</li>
                            <li onClick={close}>SERVICES</li>
                            <li onClick={close}>RESOURCES</li>
                            <li onClick={close}>CAREERS</li>
                            <li onClick={close}>HOME CARE HEROES</li>
                            <li onClick={close}>CONTACT</li>
                        </ul>
                    <div className="phone">
                        <i class="fas fa-phone-alt"></i>
                        <h1><span>866-986-3356</span></h1>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
