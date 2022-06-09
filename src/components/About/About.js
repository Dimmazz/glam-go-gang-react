import React from "react";
import imgGoneFludd from "./img/gone-fludd.jfif";
import imgIroh from "./img/iroh.jpg"
import "./About.scss"

export default function About(props) {
    console.log(imgGoneFludd);

    return (
        <section className="about">
            <div className="about__inner">
                <div className="about__card">
                    <div className="card__preview" style={{ backgroundImage: `url("/static/media/gone-fludd.195c4424c4e7ea7f57b9.jfif");` }}>
                        {/* <img className="card__img" src={imgGoneFludd} alt="" /> */}
                    </div>
                    <div className="card__name">
                        GONE.Fludd
                    </div>
                    <ul className="card__social">
                        <li><a href="https://vk.com/gonefludd132">VK</a></li>
                        <li><a href="https://www.youtube.com/channel/UCV3vUmAUYkOMCOBGO5JpUbA">Youtube</a></li>
                        <li><a href="https://www.tiktok.com/@bigboygonefludd">TikTok</a></li>
                    </ul>
                </div>
                <div className="about__card">
                    <div className="card__preview" style={{ background: "#ccc" }}>

                    </div>
                    <div className="card__name">
                        IROH
                    </div>
                    <ul className="card__social">
                        <li><a href="https://vk.com/prettyiroh">VK</a></li>
                        <li><a href="https://www.youtube.com/channel/UCHLA0xJ8lE1VCNS7mNMtCew">Youtube</a></li>
                        <li><a href="https://www.tiktok.com/@prettyiroh">TikTok</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
