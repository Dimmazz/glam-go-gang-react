import React from "react";
import coverImg from "../Music/img/cover.jpeg"
import "./Music.scss"

export default function Music(params) {
    return (
        <section className="music" id="music">
            <div className="music__cover">
                <div className="cover__preview">
                    <img
                        className="cover__img"
                        src={coverImg}
                        alt="preview cover"
                    />
                </div>
                <div className="cover__text">
                    <h2 className="cover__title">WEEDEDED &bull; <span className="cover__date">04 May 2022</span> </h2>
                    <p className="cover__artists">Glam Go,  GONE.Fludd, IROH, CAKEBOY, Flipper Floyd</p>
                </div>
            </div>
            <div className="music__player">
                <iframe
                    // style="border-radius:12px" 
                    src="https://open.spotify.com/embed/album/0ywwLUSxnRgauISMWQMrfq?utm_source=generator&theme=0" 
                    width="100%"
                    height="450"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
            </div>
        </section>
    );
};
