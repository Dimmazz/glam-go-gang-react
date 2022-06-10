import "./Footer.scss";
import React from "react";

export default function Footer(params) {

  const getYear = () => {
    let time = new Date()
    return time.getFullYear()
  }

  return (
    <footer className="footer container">
      <div className="footer__copy">
        <div className="footer__title">
          &#169; 2018 &ndash; {getYear()} Glam Go!
        </div>
        <div className="footer__creator-tag">
          Desing & codding - <a className="footer__link" href="https://t.me/MazuSad">MazuSad</a>
        </div>
        <div className="footer__inscription">
          All Right Reserved.
        </div>
      </div>

      <ul className="footer__media">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </footer>
  );
};
