import "./Footer.scss";
import React from "react";

export default function Footer(params) {
    return (
        <footer className="footer">
            <div className="footer__copy">
                <div className="footer__title">
                    &#169; 2020 Glam Go! 
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
