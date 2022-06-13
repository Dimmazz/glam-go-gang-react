import React from "react";
import galleryImg from "../Home/img/sbg.jpg"
import galleryImg2 from "../Music/img/cover.jpeg"
import "./Gallery.scss"

export default function Gallery(props) {
    return (
        <section className="gallery container" id="gallery">
            <ul className="gallery__list">
                <li className="list__item"><img className="item__img" src={galleryImg} alt="" /></li>
                <li className="list__item"><img className="item__img" src={galleryImg2} alt="" /></li>
            </ul>
            <ul className="gallery__list">
                <li className="list__item"><img className="item__img" src={galleryImg2} alt="" /></li>
                <li className="list__item"><img className="item__img" src={galleryImg} alt="" /></li>
            </ul>
        </section>
    );
};
