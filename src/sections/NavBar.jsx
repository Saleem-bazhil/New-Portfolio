import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {

    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
             const isScrolled = window.scrollY > 10;
             setScrolled(true);
        }
        window.addEventListener("scroll",handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    })

  return (
    <header className={`navbar  ${scrolled ? "scrolled" : "not-scrolled top-4"}`}>
      <div className="inner">
        <a href="#hero" className="logo inter tracking-[0.6px]">
          Saleem | Bazhil
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ Link, name }) => (
              <li key={name} className="group">
                <a href={Link}>
                  <span className="inter tracking-[0.4px]">{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <span className="inner">
            <span className="inter font-medium tracking-[0.4px]">Contact me</span>
          </span>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
