import React from 'react'
import './style.css';
import chap from './chap-foot.png'
import mwbe from './MWBE.png'
import brand from '../navbar/UCLogo.svg'

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="inner__footer">
                <div className="footer__box">
                    <h1>HEADQUARTERS</h1>
                    <p>46-50 57th Drive </p>
                    <p>Douglaston, NY 11362</p>
                    <p>hello@universacare.com</p>
                    <p> P: (718) 224-3758</p>
                    <p>F: 8777999065</p>
                    <img src={brand} className="logo" />
                </div>

                <div className="double__box">
                    <div className="footer__box">
                        <h1>SERVICES</h1>
                        <p>Hourly Care</p>
                        <p>Daily Care</p>
                        <p>Hospital to Home</p>
                        <p>Respite Care</p>
                        <p>Specialized Care</p>
                    </div>

                    <div className="footer__box">
                        <h1>COMPANY</h1>
                        <p>About us</p>
                        <p>Locations</p>
                        <p>Caregivers</p>
                        <p>News & Blog</p>
                        <p>Contact Us</p>
                        <p>FAQ</p>
                    </div>
                </div>

                

                <div className="footer__box">
                    <p>Sign up to receive the latest articles</p>
                    <input type="text" placeholder="Your email adress" />
                    <button className="btn">SUBMIT</button>
                    <div className="logos">
                        <img src={chap} />
                        <img src={mwbe} />
                    </div>

                    <div className="conn">
                        <h1>Follow Us</h1>
                        <div className="links">
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-instagram-square"></i>
                            <i class="fab fa-linkedin"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
