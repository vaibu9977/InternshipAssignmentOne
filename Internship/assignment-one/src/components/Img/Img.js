import React from "react";
import Mount from "./MOUNT.jpg";
import './Img.css'
export default function Img()
{
    return(
        <div className="bucket">
        <img src={Mount} className="Img" alt='' width={620} height={400}></img>
        </div>
    )
}


