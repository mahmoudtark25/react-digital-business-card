import React from 'react';
import twitterLogo from "../assets/icons/twitter-icon.png"
import facebookLogo from "../assets/icons/facebook-icon.png"
import instagramLogo from "../assets/icons/instagram-icon.png"
import githubLogo from "../assets/icons/github-icon.png"


export default function Footer() {
    return (
        <div className="card--footer">
            <a href="https://twitter.com/MahmoudTark">
                <img src={twitterLogo} alt="twitter" />
            </a>
            <a href="#">
                <img src={facebookLogo} alt="facebook" />
            </a>
            <a href="#">
                <img src={instagramLogo} alt="" />
            </a>
            <a href="https://github.com/mahmoudtark25">
                <img src={githubLogo} alt="" />
            </a>
        </div>    
    )
}