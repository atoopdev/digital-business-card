import React from "react"
import TwitterIcon from "../images/square-twitter-brands.svg"
import GitHubIcon from "../images/square-github-brands.svg"

export default function Footer(){
    return <footer className="footer">
        <ul className="footer-items">
            <li><img src={TwitterIcon} className="footer-icons grey-filter" alt="Twitter icon"></img></li>
            <li><img src={GitHubIcon} className="footer-icons grey-filter" alt="github icon"></img></li>
        </ul>
    </footer>
}