import React from 'react';
import mailIcon from '../assets/icons/mail.png'
import linkedinIcon from '../assets/icons/linkedin.png'
import cardImage from '../assets/avatar-profile.png'

export default function Info() {
    return (
        <div className="card--info">
            <img className="card--image" src={cardImage} alt="profile" />
            <h2>Mahmoud Tarek</h2>
            <h5>Full Stack Developer</h5>
            <h6>React+Django</h6>
            <div className="info--buttons">
                <a href="mailto: mahmoudtark2020@gmail.com" className="button">
                    <img src={mailIcon} alt="" />
                    <p>Email</p>
                </a>
                <a href="https://www.linkedin.com/in/mahmoudtark25/" className="button">
                    <img src={linkedinIcon} alt="" />
                    <p>Linkedin</p>
                </a>
            </div>
        </div>
    )
}