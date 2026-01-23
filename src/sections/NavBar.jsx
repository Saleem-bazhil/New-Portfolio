import { useEffect, useState, memo, useCallback } from "react";
import { navLinks } from "../constants";

const NavBar = memo(() => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 10;
    setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : "not-scrolled top-4"}`}
    >
      <div className="inner">
        <a href="#hero" className="logo inter tracking-[0.6px]">
          Saleem | Bazhil
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span className="inter tracking-[0.4px]">{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <span className="inner">
            <span className="inter font-medium tracking-[0.4px]">
              Contact me
            </span>
          </span>
        </a>
      </div>
    </header>
  );
});

NavBar.displayName = "NavBar";

export default NavBar;
