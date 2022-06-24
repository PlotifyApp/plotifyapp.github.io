import React from "react";
import "./computerTop.css"

export function ComputerTop({songInfo, hoveredSong}) {
    let songs = []; 
    for (var song in songInfo) {
        if (hoveredSong === songInfo[song].track) {
            songs.push(<li key={song} style={{color: "#1DB954", marginLeft: -12.5 }}><span style={{marginLeft: -6.5}}> {songInfo[song].track} </span></li>)
        } else {
            songs.push(<li key={song} style={{color: "white", listStyleType: "none"}}> {songInfo[song].track} </li>)
        }
    }

    return (
        <div className="margins"> 
            <div className="top"> 
                <h2 className="header"> {songs.length <= 0 ? "Loading..." : "Your Top 10"}</h2>
                <div className="songs"> 
                    {songs.map(song => <div> {song} </div>)}
                </div> 
            </div> 
        </div> 
    )
}