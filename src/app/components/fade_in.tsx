"use client";

import { useEffect, useState } from "react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => (img.onload = img.onerror = resolve))
        )
    ).then(() => {
      setIsVisible(true);
    });
  }, []);

  return (
    <div
      className={`transition-opacity duration-200 ease-in ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
