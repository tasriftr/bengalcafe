import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer">
        <h4 className="text-center">Bengal Cafe</h4>
        <p className="text-center mt-3">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/policy">Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
