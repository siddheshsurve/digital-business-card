import React from "react"
import ProfilePic from "./components/ProfilePic"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
export default function App () {
  return (
    <>
      <div className="container">
        <ProfilePic />
        <MainContent />
        <Footer />
      </div>
    </>
  )
}