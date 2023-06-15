import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/blog">blog</Link>
    </div>
  )
}

export default Navbar;