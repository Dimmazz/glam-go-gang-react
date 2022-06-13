import React from "react";
import img from "../Music/img/cover.jpeg"
import "./Contacts.scss";


export default function Contacts(params) {
    return (
        <section className="contacts container" id="contacts">
            <div className="contacts__logo">
                <img src={img} alt="" />
            </div>
            <div className="contacts__text">
                <div className="contacts__title">
                    Game Go Gang!
                </div>
                <div className="contacts__phone">
                    <a href="tel:+79777777777">+7 (977) 777-77-77</a>
                </div>
                <ul className="contacts__social">
                    <li><a href="mailto:glam@go.gang">glam@go.gang</a></li>
                    <li>
                        <a href="https://vk.com/glamgogang">
                            VK
                        </a>
                    </li>
                    <li><a href="https://www.youtube.com/watch?v=3tCI2FAFJf8&list=PLZ3KCPdAmvhmi6hqKSeUs3Kp22Qdkr1Xv">Youtube</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};
