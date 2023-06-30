import React, { useState } from "react"
import { Link } from "gatsby"
import { useLocation } from '@reach/router'

const Navbar = () => {
  // Used to assign 'is-active' to current page
  const location = useLocation();
  const currentPath = location.pathname;

  // Use state to store the active link
  const [activeLink, setActiveLink] = useState("")

  // Function to handle link hover
  const handleLinkHover = (event) => {
    setActiveLink(event.target)
  }

  return (
    <div className="hero-head">
      <nav className="navbar">
        <div className="container is-max-widescreen">
          <div className="navbar-menu">
            <div className="navbar-end">
              <Link className={`navbar-item ${currentPath === '/' && activeLink == '' ?  'is-active' : ''}`} 
                to="/"
                onMouseEnter={handleLinkHover} // Call handleLinkHover function on mouse enter
                onMouseLeave={() => setActiveLink("")} // Clear active link when mouse leaves
              >
                home
                <span className="navbar-item-hover"></span>
              </Link>
              <Link className={`navbar-item ${currentPath === '/about/' && activeLink == '' ? 'is-active' : ''}`}  
                to="/about"
                onMouseEnter={handleLinkHover} // Call handleLinkHover function on mouse enter
                onMouseLeave={() => setActiveLink("")} // Clear active link when mouse leaves
              >
                about
                <span className="navbar-item-hover"></span>
              </Link>
              <Link className={`navbar-item ${currentPath === '/blog/' && activeLink == '' ? 'is-active' : ''}`}  
                to="/blog"
                onMouseEnter={handleLinkHover} // Call handleLinkHover function on mouse enter
                onMouseLeave={() => setActiveLink("")} // Clear active link when mouse leaves
              >
                blog
                <span className="navbar-item-hover"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;