import React from "react"
import header_img from "../images/portfolio_header_cropped.jpg"

export default function Header(){
    return <header className="header">
        <img src={header_img} className = "header-img" alt="picture of amanda"></img>
        <h1 className="name">Amanda Toop</h1>
        <h2 className="title">Frontend Developer</h2>
        <h3 className="website"><a href="https://wwww.amandatoop.com/">wwww.amandatoop.com</a></h3>
        <div className="button-box">
            <button className="btn email-btn"><i class="fa-solid fa-envelope"></i>Email</button>
            <button className="btn linkedin-btn"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
        </div>
    </header>
}