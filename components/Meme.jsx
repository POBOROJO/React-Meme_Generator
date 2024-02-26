import React, { useState } from "react";
import getMeme from "../api/getMeme";

export default function Meme(){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
 
    const [allMemeImages, setAllMemeImages] = useState(getMeme);

    function getMemeImg(){
       const memesArray = allMemeImages.data.memes;
       const randomNumber = Math.floor(Math.random() * memesArray.length);
       const url = memesArray[randomNumber].url;
       setMeme(prevMeme =>{
            return {
                ...prevMeme,
                randomImage : url
            }
       });

    }
    return(
        <>
            <div className="form_body">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button" onClick={getMemeImg}
                >
                    Generate a new image
                </button>
            </div>
            
            <div className="meme--container">
                
                <img src={meme.randomImage} className="meme--image"/>
            </div>
        </>
    )
}