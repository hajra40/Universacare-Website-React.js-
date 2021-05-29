import React from 'react'
import './style.css'
import icon from '../../imgs/circle-infor.svg';

const NotificationBar = () => {
    return (
        <div className="notificationbar">
            <img className="icon" src={icon} alt="notification icon" />
            <h1>READ ABOUT OUR COVID-19 PRECAUTIONS</h1>
        </div>
    )
}

export default NotificationBar
