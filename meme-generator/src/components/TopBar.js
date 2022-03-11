import React from "react";
import troll from '../images/index.jpg'

export default function TopBar() {
    return (
        <nav className="top--bar">
            <div className="top--title">
                <img src={troll} alt="troll" className="top--img"></img>
                <h1 className="text">Meme Generator</h1>
            </div>
            <h3>React Course - Project 3</h3>
        </nav>
    )
}