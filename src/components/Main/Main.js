import React from "react";
import Gallery from "../Gallery/Gallery";
import Home from "../Home/Home";
import Music from "../Music/Music";

export default function Main(props) {
    return (
        <main className="main">
            <Home />
            <Music />
            <Gallery />
        </main>
    );
};
