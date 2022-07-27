import React from "react"
import header_img from "../images/portfolio_header_cropped.jpg"
import LinkedinLogo from "../images/linkedin-brands.svg"
import EmailIcon from "../images/envelope-solid.svg"

export default function Header(){
    return <header className="header">
        <img src={header_img} className = "header-img" alt="picture of amanda"></img>
        <h1 className="name">Amanda Toop</h1>
        <h2 className="title">Frontend Developer</h2>
        <h3 className="website"><a href="https://wwww.amandatoop.com/">wwww.amandatoop.com</a></h3>
        <div className="button-box">
            <button className="btn email-btn"><img src={EmailIcon} alt="envelope icon" className="email-icon"></img><a href="https://www.amandatoop.com/blog/contact-me/">Email</a></button>
            <button className="btn linkedin-btn"><img src={LinkedinLogo} className="linkedin-icon white-filter" alt="LinkedIn Logo"></img><a href="https://www.linkedin.com/in/amanda-toop-a3358719a/">LinkedIn</a></button>
        </div>
    </header>
}