import React from 'react'
import './style.css';
import heroimg from './home-hero.png'

const Home = () => {
    return (
        <div className="home bd__container">
            <div className="home__content">
                <h1>The Future of Health <br />Care is Home Care</h1>
                <p>Over a Decade of Trusted Care.</p>
                <button className="btn">REQUEST AN APPOINTMENT</button>
            </div>
            <div className="home__img">
                <img src={heroimg} />
            </div>
            
        </div>
    )
}

export default Home
