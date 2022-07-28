import React from "react"
import TwitterIcon from "../images/square-twitter-brands.svg"
import GitHubIcon from "../images/square-github-brands.svg"

export default function Footer(){
    return <footer className="footer">
        <ul className="footer-items">
            <li><a href="https://twitter.com/atoop"><img src={TwitterIcon} className="footer-icons grey-filter" alt="Twitter icon"></img></a></li>
            <li><a href="https://github.com/atoopdev"><img src={GitHubIcon} className="footer-icons grey-filter" alt="github icon"></img></a></li>
        </ul>
    </footer>
}