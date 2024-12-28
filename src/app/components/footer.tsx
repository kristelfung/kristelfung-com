"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [buttonText, setButtonText] = useState("[email]");

  const handleButtonClick = () => {
    navigator.clipboard.writeText("kristelfung@gmail.com");
    setButtonText("copied!");

    setTimeout(() => {
      setButtonText("[email]");
    }, 1000);
  };

  return (
    <footer>
      <div className="max-w-container mx-auto py-8 text-base">
        <Link
          href="https://github.com/kristelfung"
          target="_blank"
          rel="noopener noreferrer"
        >
          [github]
        </Link>
        <span className="px-2">/</span>
        <Link
          href="https://www.linkedin.com/in/kristelfung/"
          target="_blank"
          rel="noopener noreferrer"
        >
          [linkedin]
        </Link>
        <span className="px-2">/</span>
        <button onClick={handleButtonClick}>{buttonText}</button>
      </div>
    </footer>
  );
}
