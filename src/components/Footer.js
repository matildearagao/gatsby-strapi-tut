import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return <footer className="footer">
    <div>
      <SocialLinks styleClass="footer-links"/>
      <h4>copyright&copy;{new Date().getFullYear()}</h4>
     <p> <span>Webdev</span> all rights reserved</p>
    </div>
  </footer>
}

export default Footer
 