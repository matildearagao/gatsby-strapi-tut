import React, { useState } from "react"
// import "../css/main.css" #or import in gatsby-browser.js
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      {children}
      <Footer />
    </>
  )
}

export default Layout 
