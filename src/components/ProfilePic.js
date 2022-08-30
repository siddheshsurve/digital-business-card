import React from "react"

import "../index.css"
import Pic from "../images/pic.png"

export default function ProfilePic () {
    return (
        <>
            <div className="profile-pic-main">
                <img className="pic" src={Pic} />
            </div>
        </>
    )
}

