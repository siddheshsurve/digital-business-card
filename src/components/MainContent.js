import React from "react"
import ReactDOM from "react-dom"
import "../index.css"

export default function MainContent () {
    return (
        <>
            <p className="name">Sidhhesh Surve</p>
            <p className="post">Frontend Developer</p>
            <p className="mylink">siddheshsurve.portfolio</p>
            <div className="buttons">
                <div className="email">
                    <p className="email-text">Email</p>
                </div>
                <div className="ll">
                    <p className="ll-text">LinkedIn</p>
                </div>
            </div>
            <p className="about">About</p>
            <p className="about-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <p className="about">Intersets</p>
            <p className="about-text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>  
        </>
    )
}

