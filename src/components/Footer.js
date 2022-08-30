import React from "react"
import "../index.css"
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import github from "../images/github.png"

export default function Footer () {
    return (
        <>
            <div className="footer-main">
                <div className="twit">
                    <img src={twitter} className="twitpic" />
                </div>
                <div className="fb">
                    <img src={facebook} className="fbpic" />
                </div>
                <div className="insta">
                    <img src={instagram} className="instapic" />
                </div>
                <div className="git">
                <img src={github} className="gitpic" />
                </div>
            </div>
        </>
    )
}

