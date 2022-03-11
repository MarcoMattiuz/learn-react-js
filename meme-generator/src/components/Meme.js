import React from "react";
import memesData from "../memesData"

export default function Meme(){
    const [url, setUrl] = React.useState("")

    function getNewImg(){
        let memesArr = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArr.length)
        setUrl(memesArr[randomNumber].url)
        console.log(url)
    }

    return(
        <div className="meme">
            <div className="meme--container">
                <input type="text" placeholder="Top text" className="meme--text"/>
                <input type="text"  placeholder="Bottom text" className="meme--text"/>
                <button className="meme--button" onClick={getNewImg}>Get a new meme Image 🖼</button>
            </div>
            <img src={url} alt="meme" className="meme--img"></img>
        </div>
    )
}







