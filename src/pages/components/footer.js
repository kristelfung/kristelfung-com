import React, { useState } from "react"

const Footer = () => {
  const [buttonText, setButtonText] = useState("[email]")
  const handleButtonClick = () => {
    // Select the text to copy
    const textToCopy = "kristelfung@gmail.com"

    // Use the Clipboard API to copy the text to the clipboard
    navigator.clipboard.writeText(textToCopy)

    // Change the button text to "copied!"
    setButtonText("copied!")
    
    setTimeout(() => {
      setButtonText("[email]")
    }, 1000)
  }

  return (
    <div className="hero-foot">
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <div className="container is-max-widescreen">
          <ul>
            <li><a href="https://github.com/kristelfung">[github]</a></li>
            <li><a href="https://www.linkedin.com/in/kristelfung/">[linkedin]</a></li>
            <li><button onClick={handleButtonClick}>{buttonText}</button></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Footer;