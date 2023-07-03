import * as React from "react"
import Navbar from "./components/navbar"

import '../../src/styles/main.scss';

const NotFound = () => {
  return (
    <div className="container is-max-widescreen fade-in">
      <Navbar/>
      <div className="body-content">
        <p>not found</p>
      </div>
    </div>
  )
}

export default NotFound