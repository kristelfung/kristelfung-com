import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div className="hero-head">
      <nav className="navbar">
        <div className="container is-max-widescreen">
          <div className="navbar-menu">
            <div className="navbar-end">
              <Link className="navbar-item" to="/">home</Link>
              <Link className="navbar-item" to="/about">about</Link>
              <Link className="navbar-item" to="/blog">blog</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;