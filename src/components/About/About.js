import React from "react";
import imgGoneFludd from "./img/gone-fludd.jfif";
import imgIroh from "./img/iroh.jpg"
import imgCakeboy from "./img/cakeboy.jfif"
import imgFlipperFloyd from "./img/flipper-floyd.jpg"
import "./About.scss"

export default function About(props) {
    console.log(imgGoneFludd);

    return (
        <section className="about container">
            <h2 className="about_title">Game Go Gang!</h2>
            <div className="about__inner">
                <div className="about__card">
                    <div className="card__preview" style={{ backgroundImage: `url(${imgGoneFludd})`}}>
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
                    <div className="card__preview" style={{ backgroundImage: `url(${imgIroh})` }}>

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
                <div className="about__card">
                    <div className="card__preview" style={{ backgroundImage: `url(${imgCakeboy})` }}>
                    </div>
                    <div className="card__name">
                        Cakeboy
                    </div>
                    <ul className="card__social">
                        <li><a href="https://vk.com/cakeboy132">VK</a></li>
                        <li><a href="https://www.youtube.com/channel/UCA-O_Z77bfeTdb3Ughsqztw">Youtube</a></li>
                        <li><a href="https://www.tiktok.com/@ultracakeboy">TikTok</a></li>
                    </ul>
                </div>
                <div className="about__card">
                    <div className="card__preview" style={{ backgroundImage: `url(${imgFlipperFloyd})` }}>
                    </div>
                    <div className="card__name">
                        Flipper Floyd
                    </div>
                    <ul className="card__social">
                        <li><a href="https://vk.com/flipperfloyd">VK</a></li>
                        <li><a href="https://www.youtube.com/channel/UCVmhqblxxoGpaNil-7kshkQ">Youtube</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
