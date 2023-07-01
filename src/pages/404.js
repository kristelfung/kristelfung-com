import * as React from "react"
import Navbar from "./components/navbar"

import '../../src/styles/main.scss';

const NotFound = () => {
  return (
    <div className="container is-max-widescreen fade-in">
      <Navbar/>
      <p>not found</p>
    </div>
  )
}

export default NotFound