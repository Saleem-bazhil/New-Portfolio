import { memo } from "react";
import { Link } from "react-router-dom";
import { socialImgs } from "../constants";

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300 w-fit cursor-pointer mx-auto md:mx-0">
            Terms & Conditions / Privacy Policy
          </Link>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {currentYear} Saleem Bazhil . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
