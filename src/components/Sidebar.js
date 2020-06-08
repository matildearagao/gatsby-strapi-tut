import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({setIsOpen, isOpen}) => {

return <aside className={`sidebar ${isOpen? "show-sidebar" : ''}`}>
    <button className="close-btn" onClick={()=>setIsOpen(false)}>
      <FaTimes />
    </button>
  <div className="side-container">
    <Links styleClass={`${isOpen? "sidebar-links" : ""}`} />
    <SocialLinks styleClass={`${isOpen? "sidebar-icons" : ""}`}  />
  </div>
  </aside>
} 

export default Sidebar
