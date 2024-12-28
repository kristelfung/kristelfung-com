"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/blog", label: "blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isAnyHovered, setIsAnyHovered] = useState(false);

  return (
    <nav className="flex items-center justify-end gap-16 h-36">
      {navItems.map(({ href, label }) => {
        const isActive =
          href === "/" ? pathname === href : pathname.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            className="relative group"
            onMouseEnter={() => setIsAnyHovered(true)}
            onMouseLeave={() => setIsAnyHovered(false)}
          >
            {label}
            <span
              className={`
                absolute inline-block -left-6 -top-3 
                bg-highlight w-[120%] h-[75%] -z-10 
                transition-opacity duration-300
                ${isActive && !isAnyHovered ? "opacity-100" : "opacity-0"} 
                group-hover:opacity-100
              `}
            />
          </Link>
        );
      })}
    </nav>
  );
}
