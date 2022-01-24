import React, {useState} from "react";
import './navBar.scss'
import Button from "../shared/button/button";
import navLogo from "../images/navLogo.png";


export default function NavBar() {
    return (
        <header className="header-container">
            <div className="demo-flex flex-row flex-between flex-align-center">
                <div className="header-logo">
                    <a>
                        <img src={navLogo} aria-labelledby="Main Logo"/>
                    </a>
                </div>
                <div className="header-link-container">
                    <div className="header-link">
                        <a href="#ourWork">Our Work</a>
                    </div>
                    <div className="header-link">
                        <a href="#industries">Industries</a>
                    </div>
                    <div className="header-link">
                        <a href="#aboutUs">About Us</a>
                    </div>
                    <div className="header-link">
                        <a href="#ourExpertise">Our Expertise</a>
                    </div>
                </div>
                <div className="header-btn">
                   <Button>Contact Us</Button>
                </div>
            </div>
        </header>
    )
}