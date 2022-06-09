import React from "react";
import Home from "../Home/Home";
import Music from "../Music/Music";
import Gallery from "../Gallery/Gallery";
import Contacts from "../Contacts/Contacts";
import About from "../About/About";

export default function Main(props) {
    return (
        <main className="main">
            <Home />
            <Music />
            <Gallery />
            <About />
            <Contacts />
        </main>
    );
};
