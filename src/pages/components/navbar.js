import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div className="hero-head">
      <nav className="navbar">
        <div className="container is-max-widescreen">
          <div className="navbar-menu">
            <div className="navbar-end">
              <Link className="navbar-item" to="/">
                home
                <span className="navbar-item-hover"></span>
              </Link>
              <Link className="navbar-item" to="/about">
                about
                <span className="navbar-item-hover"></span>
              </Link>
              <Link className="navbar-item" to="/blog">
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